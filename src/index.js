import React, { useState } from "react";
import ReactDom from "react-dom";

import "../public/styles.scss";

const root = document.querySelector("#root");

function Button(props) {
	const handleClick = () => props.clickFunction(props.increment);

	return <button onClick={handleClick}>+{props.increment}</button>;
}

function Display(props) {
	return <div>{props.msg}</div>;
}

function App() {
	const [counter, setCounter] = useState(0);
	const incrementCounter = (incrementValue) =>
		setCounter(counter + incrementValue);
	return (
		<>
			<Button clickFunction={incrementCounter} increment={1} />
			<Button clickFunction={incrementCounter} increment={5} />
			<Button clickFunction={incrementCounter} increment={10} />
			<Button clickFunction={incrementCounter} increment={100} />
			<Display msg={counter} />
		</>
	);
}

ReactDom.render(<App />, root);
