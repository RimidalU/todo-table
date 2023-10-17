import { useGetPageDataQuery } from "./redux/api/interviewApi";

import { ErrorMessage, Header, LoadingMessage, Table } from "./features";

import { TODOS } from "./constants";

import "./App.css";

function App() {
	const { error, isLoading } = useGetPageDataQuery(TODOS);

	return (
		<>
			<Header />
			<Table />
			{isLoading && <LoadingMessage />}
			{error && <ErrorMessage />}
		</>
	);
}

export default App;
