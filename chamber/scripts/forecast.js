const forecast = document.querySelector('#forecast');
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=tucson,az,us&units=imperial&appid=bd1e44468748ed7181dc100da99c9dae';
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

async function apiFetch() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayForecast(data) {
  let newArr = data.list.filter(function(value, index, Arr) {
    return index % 8 == 0;
  });
  console.log(newArr);
  for (let i = 1; i < 4; i++) {
    console.log(newArr[i].dt);
    let newDay = document.createElement("div");
    newDay.classList.add("forecastDayCard");
    let newDate = newArr[i].dt;
    let newDateDay = new Date (newDate*1000);
    let dayOfWeek = days[newDateDay.getDay()];
    console.log(dayOfWeek);
    let newDayText = document.createElement("span");
    let newDayTitle = document.createElement("h3");
    newDayTitle.innerHTML = `${dayOfWeek}`;
    newDayText.innerHTML = `${newArr[i].main.temp} &deg;F - ${newArr[i].weather[0].description}`;
    newDay.appendChild(newDayTitle);
    newDay.appendChild(newDayText);
    forecast.appendChild(newDay);
  }
}