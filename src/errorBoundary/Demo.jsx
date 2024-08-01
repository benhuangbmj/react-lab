import { ErrorBoundary } from "react-error-boundary";
import Child from "./Child";

export default function Main() {
	return (
		<ErrorBoundary
			fallback={<h1>Something went wrong.</h1>}
			onError={(error, info) => {
				console.error(error);
				console.error(info.componentStack);
			}}
		>
			<Child />
		</ErrorBoundary>
	);
}
