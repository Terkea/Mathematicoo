import React from 'react'
import Head from 'next/head'
import Background from "../containers/Background";
import LadderboardTable from "../components/LadderboardTable";
import {AuthContext} from '../providers/authProvider'
import Button from "../components/Button";
import {useRouter} from "next/router";
import Logo from "../components/Logo";


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
				<Logo scale={2}/>
				<div className="text-red-400 text-3xl mt-16">Your Best score
					is: {state.profile.highestScore || 0}</div>
				<div className="text-red-400 text-5xl mb-5">Ladderboard</div>

				<div className="w-1/3">
					<LadderboardTable/>
				</div>

				<Button onClick={() => router.push('/game')} text="Start a new Game" style="w-1/7 p-5 mt-3"/>

			</Background>
		</div>
	)
}
export default Ladderboard