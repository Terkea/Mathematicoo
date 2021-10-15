import Head from 'next/head'
import Background from "../containers/Background";
import React from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {register as registerAccount} from "../providers/authProvider";

const Register = () => {
	const router = useRouter();
	const {register, handleSubmit, watch, formState: {errors}} = useForm();
	const [error, setError] = React.useState("")

	const onSubmit = (data) => {
		registerAccount(data.email, data.password, data.nickname).then(() => {
				router.push('/ladderboard')
			})
			.catch(e => {
				setError(e.toString())
			})
	};

	return (
		<div>
			<Head>
				<title>Register</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Background>
				<form onSubmit={handleSubmit(onSubmit)}>
					<motion.div
						animate={{scale: 1.1}}
						transition={{duration: 0.5}}
						className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
						<img src="/assets/hero.svg" alt="hero" style={{height: '150px'}}/>
						<p className="mb-5  text-5xl uppercase text-gray-600">Register</p>
						<input {...register("nickname", {required: true})}
						       type="text" name="nickname"
						       className="mb-5 p-3 w-80 focus:border-pink-300 rounded border-2 outline-none"
						       placeholder="Nickname"/>
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
									<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20"
									     fill="currentColor">
										<path
											d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
									</svg>
								</div>
								<div className="col-span-2 pt-1.5">Register</div>
							</div>
						</motion.button>
					</motion.div>
				</form>
			</Background>
		</div>
	)
}
export default Register