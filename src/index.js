import React, { useState } from "react";
import ReactDom from "react-dom";

import "../public/styles.scss";

const root = document.querySelector("#root");

function logRandom() {
	console.log(Math.random());
}

function Button() {
	const [counter, setCounter] = useState(0);
	//return <button onClick={logRandom}>{counter}</button>;
	return <button onClick={(_) => setCounter(counter + 1)}>{counter}</button>;
}

ReactDom.render(<Button />, root);
