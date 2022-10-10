const Button = (props) => {

	const genericFunction = () => {
		props.setInputText(props.inputText + props.label);
	}

	if (props.onClick === undefined) {
		return (
			<button onClick={genericFunction} className={props.className}>{props.label}</button>
		)
	}

	return (
		<button onClick={props.onClick} className={props.className}>{props.label}</button>
	)
};

export default Button;