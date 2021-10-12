import Head from 'next/head'
import {addDoc, collection} from "firebase/firestore";
import {firestore} from '../config/firebase'

const Login = () => {

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Login</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<button className="bg-red-200">register</button>
		</div>
	)
}
export default Login