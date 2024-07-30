import ErrorBoundary from "./ErrorBoundary";
import Child from "./Child";

export default function Main() {
	return (
		<ErrorBoundary>
			<Child />
		</ErrorBoundary>
	);
}
