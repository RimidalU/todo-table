import { useGetPageDataQuery } from "../../redux/api/interviewApi";

import { TableRow } from "./TableRow";

import { getStatusCompleted } from "./model";

import { TODOS } from "../../constants";
import { ITodo } from "../../types";

import "./Table.css";

export function Table() {
	const { data } = useGetPageDataQuery(TODOS);

	return (
		<table>
			<thead>
				<tr>
					<th>Status</th>
					<th>Title</th>
					<th>User Id</th>
				</tr>
			</thead>
			{data && (
				<tbody>
					{data.map((row: ITodo) => (
						<TableRow
							key={row.id}
							completed={getStatusCompleted(row.completed)}
							title={row.title}
							userId={row.userId}
						/>
					))}
				</tbody>
			)}
		</table>
	);
}
