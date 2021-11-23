import TableRow from "./TableRow";
import React from "react";
import {firestore} from "../config/firebase";


const LadderboardTable = () => {
	const [users, setUsers] = React.useState([])
	//https://firebase.google.com/docs/firestore/query-data/listen
	React.useEffect(async () => {
		firestore.collection("profile").orderBy('highestScore', 'desc').limit(5)
			.onSnapshot((querySnapshot) => {
			setUsers(querySnapshot.docs.map((doc) => {
				return doc.data()
			}))
		})
	}, [])

	return (
		<table className="table-auto border-collapse w-full">
			<thead>
			<tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
				<th className="px-4 py-2 bg-gray-200">Name</th>
				<th className="px-4 py-2 bg-gray-200">Score</th>
			</tr>
			</thead>
			<tbody className="text-sm font-normal text-gray-700">
			{users.map(i => {
				return <TableRow name={i.nickname} score={i.highestScore} key={i.nickname}/>
			})}
			</tbody>
		</table>
	)
}

export default LadderboardTable