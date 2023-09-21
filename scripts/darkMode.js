const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const cardLink = document.querySelectorAll(".card a");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "☀️";
		body.style.background = "#000";
		console.log(cardLink);
		for (let i = 0; i < cardLink.length; i++) {
			cardLink[i].style.color = "#F5F5DC";
		}
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		body.style.background = "#eee";
		modeButton.textContent = "🌙";
		for (let i = 0; i < cardLink.length; i++) {
			cardLink[i].style.color = "#0000EE";
		}
	}
});
