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
			<h2>Forward-Method Lab</h2>
			<div className="border-blue">
				<h3>Parent Render Count: {refRender.current}</h3>
				<div className="flexbox-row">
					<div className="border-white">
						<div>Parent Counter: {count}</div>
						<button
							type="button"
							onClick={() => {
								setCount((state) => state + 1);
							}}
						>
							Add One
						</button>
					</div>
					<Child />
					<Child
						setParentCount={setParentCount}
						parentCount={parentCount}
					/>
					<div>
						<Child ref={refChild} />
						<button
							type="button"
							onClick={() => {
								refChild.current.setCount((state) => state + 1);
							}}
						>
							Add One Forwarded to the Parent
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
