import Head from 'next/head'
import {addDoc, collection} from "firebase/firestore";
import {firestore} from '../config/firebase'

const Home = () => {

	const testFirebase = async () => {
		debugger;
		try {

			const docRef = await addDoc(collection(firestore, "users"), {
				first: "Alan",
				middle: "Mathison",
				last: "Turing",
				born: 1912
			});

			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}


	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<button onClick={testFirebase} className="bg-red-200">test</button>
		</div>
	)
}
export default Home