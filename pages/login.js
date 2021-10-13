import Head from 'next/head'
import Background from "../containers/Background";

const Login = () => {
	return (
		<div>
			<Head>
				<title>Login</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Background>
				<button className="bg-red-200">login</button>
			</Background>
		</div>
	)
}
export default Login