import React, { useState } from "react";
import ReactDom from "react-dom";

import "../public/styles.scss";

const root = document.querySelector("#root");

function Button(props) {
	return <button onClick={props.clickFunction}>+1</button>;
}

function Display(props) {
	return <div>{props.msg}</div>;
}

function App() {
	const [counter, setCounter] = useState(0);
	const incrementCounter = () => setCounter(counter + 1);
	return (
		<>
			<Button clickFunction={incrementCounter} />
			<Display msg={counter} />
		</>
	);
}

ReactDom.render(<App />, root);
