import Head from 'next/head'

const Game = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Game</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<button className="bg-red-200">game</button>
		</div>
	)
}
export default Game