const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {

		modeButton.textContent = "☀️";
		body.style.background = "#000";
		console.log(cardLink);
	} else {

		body.style.background = "none";
		modeButton.textContent = "🌙";
	}
});
