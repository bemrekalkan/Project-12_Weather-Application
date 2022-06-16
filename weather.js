//? SELECTORS
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //? page won't be refreshed after submitting
  getWeatherDataFormApi();
});

const getWeatherDataFormApi = async () => {
  //   alert("http request gone");

  let tokenKey = DecryptStringAES(localStorage.getItem("apiKey"));
  let inputValue = input.value;
  let unitType = "metric";
  let lang = "tr";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${unitType}&lang=${lang}
  `;

  try {
    //! with FETCH():
    // const response = await fetch(url).then((response => response.json());
    //! with AXIOS():
    const response = await axios(url); //? default = GET..
    //! destructiring:
    const { name, main, sys, weather } = response.data;
    let iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    // console.log(response.data);

    //? forEach => array + nodeList
    //? map, filter, reduce => array

    const cityListItems = list.querySelectorAll(".city"); //nodeList
    const cityListItemsArray = Array.from(cityListItems); // array

    //! creating "li" with DOM;
    const createdLi = document.createElement("li");
    //! a class name is given.
    createdLi.classList.add("city");
    //! card:
    const createdLiInnerHTML = `
         <h2 class="city-name" data-name="${name}, ${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
                <img class="city-icon" src="${iconUrl}">
                <figcaption>${weather[0].description}</figcaption>
            </figure>
    `;

    //! createdLiInnerHTML added to createdLi with innerHTML:
    createdLi.innerHTML = createdLiInnerHTML;

    //? every city added to the start:
    list.prepend(createdLi);
  } catch (error) {}

  form.reset(); //? same as ---> input.value = "";
};
