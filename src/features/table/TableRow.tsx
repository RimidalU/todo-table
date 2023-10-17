export function TableRow({
	completed,
	title,
	userId,
}: {
	completed: string;
	title: string;
	userId: number;
}) {
	return (
		<tr>
			<td>{completed}</td>
			<td>{title}</td>
			<td>{userId}</td>
		</tr>
	);
}
