const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#repeatPassword");
const message = document.querySelector("#formmessage");

pw2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (pw1.value !== pw2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		pw2.style.backgroundColor = "#fff0f3";
		pw2.value = "";
		pw2.focus();
	} else {
		message.style.display = "none";
		pw2.style.backgroundColor = "#fff";
		pw2.style.color = "#000";
	}
}
