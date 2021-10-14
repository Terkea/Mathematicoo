import React from 'react'
import Head from 'next/head'
import Background from "../containers/Background";
import LadderboardTable from "../components/LadderboardTable";
import {AuthContext} from '../providers/authProvider'
import Button from "../components/Button";
import {useRouter} from "next/router";
import {motion} from "framer-motion";


const generateQuestion = () => {
	const randomSign = () => ["-", "+"][Math.floor(Math.random() * 2)];
	const randomNumber = () => Math.floor(Math.random() * 1000).toString()
	const question = randomNumber() + randomSign() + randomNumber() + randomSign() + randomNumber()
	return {question, answer: eval(question)}
}


const Game = () => {
	const {state} = React.useContext(AuthContext)
	const router = useRouter()
	const [round, setRound] = React.useState(1)
	const [isGameOver, setIsGameOver] = React.useState(false)
	let question = generateQuestion();


	return (
		<div>
			<Head>
				<title>Game</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Background>
				<div className="text-red-400 text-3xl mb-30">Round number: {round}</div>
				<div className="text-red-400 text-6xl m-3">{question.question}=?</div>

			</Background>
		</div>
	)
}
export default Game