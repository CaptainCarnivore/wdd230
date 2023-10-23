const linksURL = "https://captaincarnivore.github.io/wdd230/chamber/data/members.json";

const display = document.querySelector('#spotlight');

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displaySpotlight(data.members);
}

getMembers();

const displaySpotlight = (members) => {
    let randomList = new Array();
    const n = 3;

do {
    const randomElement = members[Math.floor(Math.random() * members.length)];
    if (!randomList.includes(randomElement)) {
        randomList.push(randomElement);
    }
}
while (randomList.length < n);

    //console.log(randomList);

    randomList.forEach((member) => {
        let card = document.createElement("section");
        let itemName = document.createElement("h3");
        let itemImage = document.createElement("img");
        let itemAddress = document.createElement("p");
        let itemPhone = document.createElement("p");
        let itemUrl = document.createElement("a");
        let itemLevel = document.createElement("p");

        card.classList.add("card");

        itemName.textContent = `${member.name}`;
        itemImage.setAttribute('src', member.icon);
        itemImage.setAttribute('alt', `Logo for ${member.name}`);


        itemAddress.textContent = `${member.address}`;
        itemPhone.textContent = `${member.phone}`;
        itemUrl.href = `${member.url}`;
        itemUrl.text = `Website`;
        itemLevel.textContent = `Membership Level: ${member.memLevel}`;

        card.appendChild(itemImage);
        card.appendChild(itemName);
        card.appendChild(itemAddress);
        card.appendChild(itemPhone);
        card.appendChild(itemUrl);


        display.appendChild(card);
})
}