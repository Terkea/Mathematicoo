import TableRow from "./TableRow";
import React from "react";
import {firestore} from "../config/firebase";


const LadderboardTable = () => {
	const [users, setUsers] = React.useState([])
	React.useEffect(() => {
		const profileRef = firestore.collection("profile");
		profileRef.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					setUsers([...users, doc.data()])
				});
			});
	}, [])

	console.log(users)

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
				return <TableRow name={i.nickname} score={i.highestScore} key={i}/>
			})}
			</tbody>
		</table>
	)
}

export default LadderboardTable