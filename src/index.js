import React, { useState } from "react";
import ReactDom from "react-dom";

import "../public/styles.scss";

const root = document.querySelector("#root");

function Button() {
	const [counter, setCounter] = useState(5);
	return <button onClick={() => setCounter(counter * 2)}>{counter}</button>;
}

ReactDom.render(<Button />, root);
