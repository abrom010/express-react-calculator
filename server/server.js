const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const isCharacterSymbol = character => {
	if (character == "+") return true;
	if (character == "-") return true;
	if (character == "*") return true;
	if (character == "/") return true;
	if (character == ".") return true;
	return false;
}

const sanitize = str => {
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		if (isCharacterSymbol(str[i]) || !isNaN(str[i])) {
			newStr += str[i];
		}
	}
	return newStr;
}

app.post("/solve", (req, res) => {
	const data = req.body;
	const formula = sanitize(data.formula);
	const answer = eval(formula);
	res.json(answer);
});

app.listen(5000, () => { console.log("Server started on port 5000") });