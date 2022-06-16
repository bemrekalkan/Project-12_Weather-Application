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
  } catch (error) {}

  form.reset(); //? same as ---> input.value = "";
};
