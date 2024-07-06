import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
const Child = forwardRef(function Child({ parentCount, setParentCount }, ref) {
	const [count, setCount] = useState(0);
	useImperativeHandle(ref, () => ({
		setCount,
	}));
	return (
		<div>
			<button
				type="button"
				disabled={ref != null}
				onClick={() => {
					if (setParentCount) {
						setParentCount((state) => state + 1);
					} else {
						setCount((state) => state + 1);
					}
				}}
			>
				Child Counter
				{setParentCount
					? " From the Parent"
					: ref
						? " Forwarded to the Parent"
						: ""}
				: {parentCount ? parentCount : count}{" "}
			</button>
		</div>
	);
});
export default Child;
