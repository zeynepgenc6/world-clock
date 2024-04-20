let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss")} <small>${londonTime.format("A")}</small>`;

let moscowElement = document.querySelector("#moscow");
let moscowDateElement = moscowElement.querySelector(".date");
let moscowTimeElement = moscowElement.querySelector(".time");
let moscowTime = moment().tz("Europe/Moscow");
moscowDateElement.innerHTML = moment().format("MMMM Do YYYY");
moscowTimeElement.innerHTML = `${moscowTime.format(
  "h:mm:ss"
)} <small>${moscowTime.format("A")}</small>`;