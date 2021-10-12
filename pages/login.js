import Head from 'next/head'

const Login = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Login</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<button className="bg-red-200">login</button>
		</div>
	)
}
export default Login