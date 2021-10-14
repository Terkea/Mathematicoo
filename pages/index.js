import React from 'react'
import Head from 'next/head'
import {AuthContext} from "../providers/authProvider";
import {useRouter} from 'next/router'
import Background from "../containers/Background";
import {motion} from "framer-motion"
import Button from "../components/Button";
import Logo from "../components/Logo";


const Index = () => {
	const {state} = React.useContext(AuthContext)
	// https://nextjs.org/docs/api-reference/next/router#userouter
	const router = useRouter()

	if (state.account.uid) {
		router.push('/ladderboard')
	}

	return (
		<div className="">
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			{/* https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/ */}
			<Background>

				<Logo scale={2}/>

				<Button onClick={() => router.push('/login')} text="Login"
				        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
				                   viewBox="0 0 24 24" stroke="currentColor">
					        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
					              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
				        </svg>}
				        style="mt-24"
				/>

				<Button onClick={() => router.push('/register')} text="Register"
				        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20"
				                   fill="currentColor">
					        <path
						        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
				        </svg>}/>

			</Background>
		</div>
	)
}
export default Index