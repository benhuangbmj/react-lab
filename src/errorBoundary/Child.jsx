import React from "react";
export default function Child() {
	React.useEffect(() => {
		(async () => {
			throw "side effect error";
		})();
	}, []);
	return (
		<>
			<h1>Child of ErrorBoundary</h1>
			<button
				type="button"
				onClick={() => {
					throw "Error";
				}}
			>
				Throw Error
			</button>
			<button
				type="button"
				onClick={() => {
					throw "Another Error";
				}}
			>
				Throw Another Error
			</button>
		</>
	);
}
