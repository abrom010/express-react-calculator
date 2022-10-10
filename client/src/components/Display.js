import React from "react";

const Display = (props) => {

	return (
		<div className={props.className}><p>{props.text}</p></div>
	)
};

export default Display;