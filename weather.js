//? SELECTORS
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //? page won't be refreshed after submitting
  getWeatherDataFormApi();
});

const getWeatherDataFormApi = () => {
  //   alert("http request gone");

  let apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  let inputValue = input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  `;

  form.reset(); //? same as ---> input.value = "";
};
