import React from "react";

export default function ColorList(props) {
	const colorList = [
		"red",
		"green",
		"yellow",
		"black",
		"white",
		"orange",
		"pink"
	];

	return (
		<select
			id={props.label}
			value={props.color}
			onChange={(e) => {
				props.changeColor(e.target.value);
			}}
		>
			{colorList.map((color, index) => (
				<option value={color} key={index}>
					{color}
				</option>
			))}
		</select>
	);
}