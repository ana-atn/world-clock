function updateTime() {
  let sydneyElement = document.querySelector("#sydney");
  sydneyDateElement = sydneyElement.querySelector(".date");
  sydneyTimeElement = sydneyElement.querySelector(".time");

  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM D, YYYY");

  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");

  let parisElement = document.querySelector("#paris");
  parisDateElement = parisElement.querySelector(".date");
  parisTimeElement = parisElement.querySelector(".time");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMMM D, YYYY");

  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");

  let reykyavikElement = document.querySelector("#san-francisco");
  reykyavikDateElement = reykyavikElement.querySelector(".date");
  reykyavikTimeElement = reykyavikElement.querySelector(".time");

  reykyavikDateElement.innerHTML = moment()
    .tz("Atlantic/Reykjavik")
    .format("MMMM D, YYYY");

  reykyavikTimeElement.innerHTML = moment()
    .tz("Atlantic/Reykjavik")
    .format("h:mm:ss [<small>]A[</small>]");
}

function updateCities(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="sydney">
  <div class="city-name">
            ${cityName}
            <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>

        <a href="index.html" >back to homepage</a>
  `;
}

updateTime;
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCities);
