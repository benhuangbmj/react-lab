import { ErrorBoundary } from "react-error-boundary";
import Child from "./Child";
const logError = (error, info) => {
	console.log("on error:", error, info, error.message);
};

function fallbackRender({ error, resetErrorBoundary }) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: "red" }}>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}

export default function Main() {
	return (
		<ErrorBoundary fallbackRender={fallbackRender} onError={logError}>
			<Child />
		</ErrorBoundary>
	);
}
