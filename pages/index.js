import React from 'react'
import Head from 'next/head'
import {AuthContext, getProfile, signOut} from "../providers/authProvider";
import Game from './game'
import {useRouter} from 'next/router'

const Index = () => {
	const {state, dispatch} = React.useContext(AuthContext)
	// https://nextjs.org/docs/api-reference/next/router#userouter
	const router = useRouter()

	if (state.account.uid) {
		router.push('/game')
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

		</div>
	)
}
export default Index