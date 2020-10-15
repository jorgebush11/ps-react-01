import React from "react";
import ReactDom from "react-dom";

function SayHi() {
	return <div>Hello World...!</div>;
}

ReactDom.render(<SayHi />, document.getElementById("root"));
