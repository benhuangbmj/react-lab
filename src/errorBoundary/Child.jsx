import React from "react";
import { useErrorBoundary } from "react-error-boundary";
export default function Child() {
	const { showBoundary } = useErrorBoundary();
	const [error, setError] = React.useState(false);
	React.useEffect(() => {
		if (error) {
			throw Error("Side Effect Error");
		}
	}, [error]);
	return (
		<>
			<h1>Child of ErrorBoundary</h1>
			<button
				type="button"
				onClick={() => {
					try {
						throw Error("Error");
					} catch (err) {
						showBoundary(err);
					}
				}}
			>
				Throw Error
			</button>
			<button
				type="button"
				onClick={() => {
					try {
						throw "Another Error";
					} catch (err) {
						showBoundary(err);
					}
				}}
			>
				Throw Another Error
			</button>
			<button
				type="button"
				onClick={() => {
					setError(true);
				}}
			>
				Side Effect Error
			</button>
		</>
	);
}
