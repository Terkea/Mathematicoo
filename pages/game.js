import React from 'react'
import Head from 'next/head'
import Background from "../containers/Background";
import {AuthContext, updateProfile} from '../providers/authProvider'
import Button from "../components/Button";
import {useRouter} from "next/router";
import Logo from "../components/Logo";


const generateQuestion = () => {
	const randomSign = () => ["-", "+"][Math.floor(Math.random() * 2)];
	const randomNumber = () => Math.floor(Math.random() * 1000).toString()
	const question = randomNumber() + randomSign() + randomNumber() + randomSign() + randomNumber()
	// SCRAMBLE THE ARRAY
	// https://stackoverflow.com/a/46545530/8193864
	const possibleAnswers = [randomNumber(), randomNumber(), randomNumber(), eval(question)]
		.map((value) => ({
			value,
			sort: Math.random()
		}))
		.sort((a, b) => a.sort - b.sort)
		.map(({value}) => value)
	return {question, answer: eval(question), possibleAnswers}
}


const Game = () => {
	const {state} = React.useContext(AuthContext)
	const router = useRouter()
	const [round, setRound] = React.useState(1)
	const [isGameOver, setIsGameOver] = React.useState(false)
	const [question, setQuestion] = React.useState(generateQuestion());
	console.log(question)

	const checkAnswer = (e) => {
		if (e.target.innerText == question.answer) {
			//	next round
			setRound(round + 1)
			setQuestion(generateQuestion())
		} else {
			//	game over
			setIsGameOver(true);
			(state.profile.highestScore < round) && updateProfile({highestScore: round, nickname: state.profile.nickname})
		}
	}

	const startNewGame = () => {
		setRound(1)
		setIsGameOver(false);
		setQuestion(generateQuestion())
	}

	return (
		<div>
			<Head>
				<title>Game</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Background>
				{isGameOver ?
					<>
						<Logo scale={2}/>
						<div className="text-red-600 text-6xl m-3 mt-16">GAME OVER</div>
						<div className="text-red-400 text-3xl mb-30">Your score is: {round}</div>
						<div className="text-red-400 text-3xl mb-30">I am sure you can do better than that!</div>

						<Button onClick={startNewGame} text="Start a new Game" style="w-1/7 p-5 mt-3"/>
						<Button onClick={() => router.push('/ladderboard')} text="Check the Ladderboard" style="w-1/7 p-5 mt-3"/>

					</>
					:
					<>
						<Logo scale={2}/>
						<div className="text-red-400 text-3xl mt-16">Round number: {round}</div>
						<div className="text-red-400 text-6xl m-3">{question.question}=?</div>

						<div className="flex flex-row mt-2">
							{question.possibleAnswers.map(i => {
								return <Button onClick={e => checkAnswer(e)} text={i} style="w-1/7 p-5 mr-3"/>

							})}
						</div>
					</>}


			</Background>
		</div>
	)
}
export default Game