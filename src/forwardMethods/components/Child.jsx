import { forwardRef, useImperativeHandle, useState } from "react";
const Child = forwardRef(function Child({ parentCount, setParentCount }, ref) {
	const [count, setCount] = useState(0);
	useImperativeHandle(ref, () => ({
		setCount,
	}));
	return (
		<div className="border-green">
			<div>
				Child Counter
				{setParentCount
					? " From the Parent"
					: ref
						? " Forwarded to the Parent"
						: " in the Child"}
				: {parentCount ? parentCount : count}
			</div>
			<button
				style={{ visibility: ref ? "hidden" : "visible" }}
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
				Add One
				{setParentCount ? " From the Parent" : ""}
			</button>
		</div>
	);
});
export default Child;
