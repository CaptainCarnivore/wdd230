const todayDate = document.querySelector('#lastModified');

let lastModif = new Date(document.lastModified);

todayDate.innerHTML = "Last modified: " + lastModif;