import {initializeApp, getApp} from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

let app = null;

// SETUP DATABASE, AUTH,
// https://firebase.google.com/docs/web/setup
const firebaseConfig = {
	apiKey: "AIzaSyDCgLxpZTOsTpciJGEiZ-DsP9OdyFMOZk0",
	authDomain: "mathematicoo.firebaseapp.com",
	databaseURL: "https://mathematicoo-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "mathematicoo",
	storageBucket: "mathematicoo.appspot.com",
	messagingSenderId: "859715459834",
	appId: "1:859715459834:web:fba83b05a01613b7438743"
};


// TRY TO INITIALIZE THE APP
// OTHERWISE GRAB THE PREVIOUS INSTANCE
// https://stackoverflow.com/a/69126397/8193864
try {
	app = initializeApp(firebaseConfig);
} catch (e) {
	app = getApp()
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);