import Head from 'next/head'
import Background from "../containers/Background";

const Game = () => {
	return (
		<div>
			<Head>
				<title>Game</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Background>
				<button className="bg-red-200">game</button>
			</Background>
		</div>
	)
}
export default Game