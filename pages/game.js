import React from 'react'
import Head from 'next/head'
import Background from "../containers/Background";
import LadderboardTable from "../components/LadderboardTable";
import {AuthContext, updateProfile} from '../providers/authProvider'
import Button from "../components/Button";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
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
			(state.profile.highestScore < round) && updateProfile({highestScore: round})
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

						<motion.button
							whileHover={{scale: 1.1}}
							whileTap={{scale: 0.9}}
							onClick={startNewGame}
							className={`flex w-1/7 mt-3 bg-pink-500 text-center
					        hover:bg-pink-600 hover:to-blue-600 focus:outline-none text-white text-2xl
					        uppercase font-bold shadow-md rounded-lg mx-auto p-5 mt-3`}>
							<div className="flex text-center">
								Start a new Game
							</div>
						</motion.button>

						<motion.button
							whileHover={{scale: 1.1}}
							whileTap={{scale: 0.9}}
							onClick={() => router.push('/ladderboard')}
							className={`flex w-1/7 mt-3 bg-pink-500 text-center
					        hover:bg-pink-600 hover:to-blue-600 focus:outline-none text-white text-2xl
					        uppercase font-bold shadow-md rounded-lg mx-auto p-5 `}>
							<div className="flex text-center">
								Check the ladderboard
							</div>
						</motion.button>
					</>
					:
					<>
						<Logo scale={2}/>
						<div className="text-red-400 text-3xl mt-16">Round number: {round}</div>
						<div className="text-red-400 text-6xl m-3">{question.question}=?</div>

						<div className="flex flex-row mt-2">
							{question.possibleAnswers.map(i => {
								return <motion.button
									key={i}
									whileHover={{scale: 1.1}}
									onClick={e => checkAnswer(e)}
									whileTap={{scale: 0.9}}
									className={`flex p-5 bg-pink-500 mr-5
					        hover:bg-pink-600 hover:to-blue-600 focus:outline-none text-white text-2xl
					        uppercase font-bold shadow-md rounded-lg`}>
									<div className="flex">
										{i}
									</div>
								</motion.button>
							})}
						</div>
					</>}


			</Background>
		</div>
	)
}
export default Game