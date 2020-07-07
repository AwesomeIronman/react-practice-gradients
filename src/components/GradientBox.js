import React from "react";

export default function GradientBox({ color1, color2 }) {
	return <div id="gradient_box" style={{ background: `linear-gradient(to right, ${color1}, ${color2}` }} />;
}