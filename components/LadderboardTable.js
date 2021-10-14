import TableRow from "./TableRow";

const LadderboardTable = () => {

	return (
		<table className="table-auto border-collapse w-full">
			<thead>
			<tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
				<th className="px-4 py-2 bg-gray-200">Name</th>
				<th className="px-4 py-2 bg-gray-200">Score</th>
			</tr>
			</thead>
			<tbody className="text-sm font-normal text-gray-700">
			<TableRow name="test" score="100" />
			<TableRow name="test" score="100" />
			<TableRow name="test" score="100" />
			<TableRow name="test" score="100" />
			<TableRow name="test" score="100" />
			</tbody>
		</table>
	)
}

export default LadderboardTable