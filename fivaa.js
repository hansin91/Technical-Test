let length = 5;
let text = '';

for (let i = length - 1; i >= 0; i--) {
	let text = '';
	for (let j = 0; j <= i + 2; j++) {
		if (j >= 2) {
			text = text + (i + 2);
		} else {
			text = text + i;
		}
	}
	console.log(text);
}
