import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import ColorList from "./components/ColorList.js";
import GradientBox from "./components/GradientBox.js";

function App() {
	return (
		<React.Fragment>
			<h1 className="headline">CHOOSE YOUR COLORS</h1>

		</React.Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById("app"));
