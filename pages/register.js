import Head from 'next/head'
import {addDoc, collection} from "firebase/firestore";
import {firestore} from '../config/firebase'
import Background from "../containers/Background";

const Login = () => {

	return (
		<div>
			<Head>
				<title>Login</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Background>
				<button className="bg-red-200">register</button>
			</Background>
		</div>
	)
}
export default Login