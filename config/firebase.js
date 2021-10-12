import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDCgLxpZTOsTpciJGEiZ-DsP9OdyFMOZk0",
	authDomain: "mathematicoo.firebaseapp.com",
	databaseURL: "https://mathematicoo-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "mathematicoo",
	storageBucket: "mathematicoo.appspot.com",
	messagingSenderId: "859715459834",
	appId: "1:859715459834:web:fba83b05a01613b7438743"
};

// HOTFIX DUPLICATE APP
// https://stackoverflow.com/a/48686803/8193864
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();