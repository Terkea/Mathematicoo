import Head from 'next/head'
import Background from "../containers/Background";
import React from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {login} from '../providers/authProvider';


const Login = () => {
	const router = useRouter();
	const {register, handleSubmit, watch, formState: {errors}} = useForm();
	const [error, setError] = React.useState("");

	const onSubmit = (data) => {
		login(data.email, data.password)
			.then(() => {
				router.push('/ladderboard')
			})
			.catch(e => {
				setError(e.toString())
			})
	};

	return (
		<div>
			<Head>
				<title>Login</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Background>
				<form onSubmit={handleSubmit(onSubmit)}>
					<motion.div
						animate={{scale: 1.1}}
						transition={{duration: 0.5}}
						className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
						<img src="/assets/hero.svg" alt="hero" style={{height: '150px'}}/>
						<p className="mb-5  text-5xl uppercase text-gray-600">Login</p>

						<input {...register("email", {required: true})}
						       type="email" name="email"
						       className="mb-5 p-3 w-80 focus:border-pink-300 rounded border-2 outline-none"
						       placeholder="Email"/>
						<input {...register("password", {required: true})}
						       type="password" name="password"
						       className="mb-1 p-3 w-80 focus:border-pink-300 rounded border-2 outline-none"
						       placeholder="Password"/>
						<p className='text-red-500 mt-1 w-80'>{error}</p>

						<motion.button
							whileHover={{scale: 1.1}}
							whileTap={{scale: 0.9}}
							className={`flex w-full mt-3 bg-pink-500
					        hover:bg-pink-600 hover:to-blue-600 focus:outline-none text-white text-2xl
					        uppercase font-bold shadow-md rounded-lg mx-auto p-2 `}>
							<div className="flex sm:flex-cols-12 gap-6">
								<div className="col-span-1">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
									     viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
										      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
									</svg>
								</div>
								<div className="col-span-2 pt-1.5">Login</div>
							</div>
						</motion.button>
					</motion.div>
				</form>
			</Background>
		</div>
	)
}
export default Login