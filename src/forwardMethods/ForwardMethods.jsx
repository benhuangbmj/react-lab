import { useEffect, useRef, useState } from "react";

import Child from "/src/forwardMethods/components/Child";

export default function Parent() {
	const [count, setCount] = useState(0);
	const [parentCount, setParentCount] = useState(0);
	const refRender = useRef(1);
	const refChild = useRef();
	useEffect(() => {
		refRender.current++;
	});
	return (
		<div>
			<h1>Parent Render Count: {refRender.current}</h1>
			<button
				type="button"
				onClick={() => {
					setCount((state) => state + 1);
				}}
			>
				Parent Counter: {count}{" "}
			</button>
			<Child />
			<Child setParentCount={setParentCount} parentCount={parentCount} />
			<Child ref={refChild} />
			<button
				type="button"
				onClick={() => {
					refChild.current.setCount((state) => state + 1);
				}}
			>
				Forwarded Method
			</button>
		</div>
	);
}
