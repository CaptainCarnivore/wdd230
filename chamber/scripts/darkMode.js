const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "☀️";
		body.style.background = "#000";
		console.log(cardLink);
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		body.style.background = "#eee";
		modeButton.textContent = "🌙";
	}
});
