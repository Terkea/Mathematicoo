import Head from 'next/head'

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
		</div>
	)
}
export default Home