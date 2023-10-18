const linksURL = "https://captaincarnivore.github.io/wdd230/chamber/data/members.json";

const display = document.querySelector('#mainDisplay');

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {
    members.forEach((member) => {
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
        itemImage.setAttribute('width', '150');
        itemImage.setAttribute('height', '150');

        itemAddress.textContent = `${member.address}`;
        itemPhone.textContent = `${member.phone}`;
        itemUrl.href = `${member.url}`;
        itemUrl.text = `Website`;
        itemLevel.textContent = `${member.memLevel}`;

        card.appendChild(itemImage);
        card.appendChild(itemName);
        card.appendChild(itemAddress);
        card.appendChild(itemPhone);
        card.appendChild(itemUrl);
        card.appendChild(itemLevel);

        display.appendChild(card);

    });
}