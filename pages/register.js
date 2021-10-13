import Head from 'next/head'
import Background from "../containers/Background";
import React from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import Button from "../components/Button";

const Register = () => {
	const router = useRouter()
	return (
		<div>
			<Head>
				<title>Register</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Background>
				<motion.div
					animate={{scale: 1.1}}
					transition={{duration: 0.5}}
					className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
					<img src="/assets/hero.svg" alt="hero" style={{height: '150px'}}/>
					<p className="mb-5  text-5xl uppercase text-gray-600">Register</p>
					<input type="text" name="nickname"
					       className="mb-5 p-3 w-80 focus:border-pink-300 rounded border-2 outline-none"
					       placeholder="Nickname"/>
					<input type="email" name="email"
					       className="mb-5 p-3 w-80 focus:border-pink-300 rounded border-2 outline-none"
					       placeholder="Email"/>
					<input type="password" name="password"
					       className="mb-5 p-3 w-80 focus:border-pink-300 rounded border-2 outline-none"
					       placeholder="Password"/>


					<Button onClick={() => router.push('/register')} text="Register"
					        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20"
					                   fill="currentColor">
						        <path
							        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
					        </svg>}
					        style="w-full"
					/>

				</motion.div>
			</Background>
		</div>
	)
}
export default Register