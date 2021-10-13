import Head from 'next/head'
import Background from "../containers/Background";
import React from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import Button from "../components/Button";

const Login = () => {
	const router = useRouter()
	return (
		<div>
			<Head>
				<title>Login</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Background>
				<motion.div
					animate={{scale: 1.1}}
					transition={{duration: 0.5}}
					className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
					<img src="/assets/hero.svg" alt="hero" style={{height: '150px'}}/>
					<p className="mb-5  text-5xl uppercase text-gray-600">Login</p>
					<input type="email" name="email"
					       className="mb-5 p-3 w-80 focus:border-pink-300 rounded border-2 outline-none"
					       placeholder="Email"/>
					<input type="password" name="password"
					       className="mb-5 p-3 w-80 focus:border-pink-300 rounded border-2 outline-none"
					       placeholder="Password"/>
					<Button onClick={() => router.push('/login')} text="Login"
					        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
					                   viewBox="0 0 24 24" stroke="currentColor">
						        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
						              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
					        </svg>}
					        style="w-full"
					/>
				</motion.div>
			</Background>
		</div>
	)
}
export default Login