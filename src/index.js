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
}

updateTime;
setInterval(updateTime, 1000);
