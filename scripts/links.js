const baseURL = "https://captaincarnivore.github.io/wdd230/";

const linksURL = "https://captaincarnivore.github.io/wdd230/data/links.json";

const actList = document.querySelector('#activityList');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let item = document.createElement("li");
        let itemName = document.createElement("span");
        itemName.textContent = `${week.weekName} `;
        item.appendChild(itemName);
        week.links.forEach((link) => {
            let itemLinkSpace = document.createElement("span");
            let itemLink = document.createElement("a");
            itemLinkSpace.textContent = ` | `;
            itemLink.href=  `${link.url}`;
            itemLink.text= `${link.title}`;
            item.appendChild(itemLink);
            item.appendChild(itemLinkSpace);
            });
         actList.appendChild(item);
    });
}


getLinks();