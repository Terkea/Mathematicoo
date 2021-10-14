import React from 'react'
import Head from 'next/head'
import Background from "../containers/Background";
import LadderboardTable from "../components/LadderboardTable";
import {AuthContext} from '../providers/authProvider'
import Button from "../components/Button";
import {useRouter} from "next/router";
import {motion} from "framer-motion";


const Ladderboard = () => {
	const {state} = React.useContext(AuthContext)
	const router = useRouter()

	return (
		<div>
			<Head>
				<title>Game</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Background>
				<div className="text-red-400 text-3xl m-3">Your Best score is: {state.profile.highestScore}</div>
				<div className="text-red-400 text-5xl m-3">Ladderboard</div>

				<div className="w-1/3">
					<LadderboardTable/>
				</div>

				<motion.button
					whileHover={{scale: 1.1}}
					whileTap={{scale: 0.9}}
					onClick={() => router.push('/game')}
					className={`flex w-1/7 mt-3 bg-pink-500 text-center
					        hover:bg-pink-600 hover:to-blue-600 focus:outline-none text-white text-2xl
					        uppercase font-bold shadow-md rounded-lg mx-auto p-5 `}>
					<div className="flex text-center">
						Start a new Game
					</div>
				</motion.button>

			</Background>
		</div>
	)
}
export default Ladderboard