const baseURL = "https://captaincarnivore.github.io/wdd230/";

const linksURL = "https://captaincarnivore.github.io/wdd230/data/links.json";

const actList = document.querySelector('#activityList');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

const displayLinks = (data) => {
    data.weeks.forEach((week) => {
        let item = document.createElement("li");
        let itemName = document.createElement("span");
        itemName.textContent = `${week} `;
        item.appendChild(itemName);
        week.links.forEach((link) => {
            let itemLinkSpace = document.createElement("span");
            let itemLink = document.createElement("a");
            itemLinkSpace.textContent = ` | `;
            itemLink.setAttribute('href', `${url}`);
            itemLink.setAttribute('text', `${title}`);
            item.appendChild(itemLink);
            item.appendChild(itemLinkSpace);
            });
    });
}


getLinks();