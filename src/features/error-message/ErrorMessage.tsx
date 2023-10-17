import "./ErrorMessage.css";

export function ErrorMessage() {
	return (
		<div className="error-container">
			<h2>Error loading data!</h2>
			<h3>Please try again later.</h3>
		</div>
	);
}
