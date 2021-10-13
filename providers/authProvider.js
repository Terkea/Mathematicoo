import React from 'react'
import {auth, firestore} from '../config/firebase'

/* REDUCER */
const initialState = {
	account: {},
	profile: {},
	errors: [],
}

const authReducer = (state, action) => {
	switch (action.type) {
		case 'REGISTER':
			return {...state, account: action.payload.account, profile: action.payload.profile}
		case 'LOGIN':
			return {...state, account: action.payload.account, profile: action.payload.profile}
		case 'LOGOUT':
			return {...state, account: {}, profile: {}}
		case 'ERROR':
			return {...state, errors: action.payload.errors}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

/* ACTIONS */
export const login = (email, password) => {
	return auth.signInWithEmailAndPassword(email, password)
}

export const register = (email, password, nickname) => {
	return auth.createUserWithEmailAndPassword(email, password).then((res) => {
		let data = {nickname, highestScore: 0}
		// create profile
		firestore.collection(`profile`)
			.doc(res.user.uid)
			.set(data)
			.then(r => console.log(r))
			.catch(e => console.log(e))
	})
}

export const signOut = () => {
	localStorage.removeItem('user')
	return auth.signOut()
}

export const updateProfile = (object) => {
	return firestore.collection(`profile`)
		.doc(auth.currentUser?.uid)
		.set(object)
		.then(r => console.log(r))
}

export const getProfile = async (uuid) => {
	const collectionInstance = firestore.collection('profile').doc(uuid)
	const doc = await collectionInstance.get()
	return doc.data()
}

/* COMPONENT */
const AuthContext = React.createContext({})

const AuthProvider = ({children}) => {
	const [state, dispatch] = React.useReducer(authReducer, initialState)
	const value = {state, dispatch}


	React.useEffect(() => {
		const test = auth.onAuthStateChanged(user => {
			if (auth.currentUser) {
				// fetch the profile
				getProfile(auth.currentUser.uid).then((profile) => {
					// set context data
					dispatch({
						type: 'LOGIN',
						payload: {account: auth.currentUser, profile: profile}
					})
				})
			} else {
				signOut();
				dispatch({type: 'LOGOUT'})
			}
		});
		return test();
	}, []);

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

export {AuthContext, AuthProvider}