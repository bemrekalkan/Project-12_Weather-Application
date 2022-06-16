//? SELECTORS
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //? page won't refresh after submitting
  getWeatherDataFormApi();
});

const getWeatherDataFormApi = () => {
  alert("http request gone");
  form.reset(); //? same as ---> input.value = "";
};
