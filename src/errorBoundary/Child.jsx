import React from "react";
import { useErrorBoundary } from "react-error-boundary";
export default function Child() {
	const { showBoundary } = useErrorBoundary();
	React.useEffect(() => {
		(async () => {
			try {
				throw "side effect error";
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);
	return (
		<>
			<h1>Child of ErrorBoundary</h1>
			<button
				type="button"
				onClick={() => {
					try {
						throw "Error";
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
						console.error(err);
					}
				}}
			>
				Throw Another Error
			</button>
		</>
	);
}
