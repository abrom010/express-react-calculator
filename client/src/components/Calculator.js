import Display from "./Display";
import Button from "./Button";
import React from "react";

const Calculator = () => {

	const [inputText, setInputText] = React.useState("");
	const [resultText, setResultText] = React.useState("");

	const clearFunction = () => {
		setInputText("");
		setResultText("");
	}

	const backspaceFunction = () => {
		setInputText(inputText.slice(0, inputText.length - 1));
	}

	const equalsFunction = async () => {
		let formula = inputText;
		const response = await fetch("/solve", {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({ formula: formula })
		});
		const data = await response.json();
		setResultText(data);
		setInputText("");
	}

	return (
		<div className="Background">
			<div className="DisplayPanel">
				<Display text={inputText} className="InputDisplay" />
				<Display text={resultText} className="ResultDisplay" />
			</div>

			<div className="ButtonsPanel">
				<div className="FirstRow">
					<Button inputText={inputText} setInputText={setInputText} onClick={clearFunction} className="ClearButton" label="CLEAR" />
					<Button inputText={inputText} setInputText={setInputText} onClick={backspaceFunction} label="<" />
				</div>

				<div>
					<Button inputText={inputText} setInputText={setInputText} label="1" />
					<Button inputText={inputText} setInputText={setInputText} label="2" />
					<Button inputText={inputText} setInputText={setInputText} label="3" />
					<Button inputText={inputText} setInputText={setInputText} label="+" />
				</div>

				<div>
					<Button inputText={inputText} setInputText={setInputText} label="4" />
					<Button inputText={inputText} setInputText={setInputText} label="5" />
					<Button inputText={inputText} setInputText={setInputText} label="6" />
					<Button inputText={inputText} setInputText={setInputText} label="-" />
				</div>

				<div>
					<Button inputText={inputText} setInputText={setInputText} label="7" />
					<Button inputText={inputText} setInputText={setInputText} label="8" />
					<Button inputText={inputText} setInputText={setInputText} label="9" />
					<Button inputText={inputText} setInputText={setInputText} label="*" />
				</div>

				<div>
					<Button inputText={inputText} setInputText={setInputText} label="0" />
					<Button inputText={inputText} setInputText={setInputText} label="." />
					<Button inputText={inputText} setInputText={setInputText} onClick={equalsFunction} label="=" />
					<Button inputText={inputText} setInputText={setInputText} label="/" />
				</div>
			</div>

		</div>
	);
};

export default Calculator;