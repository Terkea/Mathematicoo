const TableRow = ({name, score}) => {
	return (
		<tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
			<td className="px-4 py-4 bg-gray-100">{name}</td>
			<td className="px-4 py-4 bg-gray-100">{score}</td>
		</tr>
	)
}

export default TableRow