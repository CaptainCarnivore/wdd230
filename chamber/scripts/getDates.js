const todayDate = document.querySelector('#lastModified');

let lastModif = new Date(document.lastModified);

todayDate.innerHTML = "Last modified: " + lastModif;

const msToDays = 84600000;
let today = new Date();
let todayMS = Date.now();
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || todayMS;

const lastVisited = document.querySelector('#lastVisited');

//if (todayMS == lastVisit)
//{
//    lastVisited.textContent = "Welcome! Let us know if you have any questions.";
//} else if ((todayMS - lastVisit) <= 84600000) {
//    lastVisited.textContent = "Back so soon! Awesome!";
//} else if ((todayMS - lastVisit) > 84600000) {
//    lastVisited.textContent = "You last visited " + ((todayMS - lastVisit) / msToDays).toFixed(0) + "days ago";
//}

localStorage.setItem("lastVisit-ls", todayMS);

//var date1 = new Date();
//window.localStorage.setItem("date", date1.getTime());

//var date2 = new Date(Number(window.localStorage.getItem("date")));
//window.localStorage.setItem("date", date2.getTime());
//alert(date2);