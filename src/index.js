import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import ColorList from "./components/ColorList.js";
import GradientBox from "./components/GradientBox.js";

function App() {
	let [
		color1,
		setColor1
	] = useState("red");
	let [
		color2,
		setColor2
	] = useState("green");

	return (
		<React.Fragment>
			<h1 className="headline">CHOOSE YOUR COLORS</h1>

			<div className="cta_labels">
				<label for="color1">
					<h2>Select first color:</h2>
				</label>

				<label for="color2">
					<h2>Select second color:</h2>
				</label>
			</div>

		</React.Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById("app"));
