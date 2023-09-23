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
		main.style.background = "#368f8bff";
		main.style.color = "#f4edeaff";
		body.style.background = "#368f8bff";
		modeButton.textContent = "🌙";
	}
});
