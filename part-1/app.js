let favNumber = 5;
let myUrl = "http://numbersapi.com";

$.getJSON(`${myUrl}/${favNumber}?json`).then(data => {
  console.log(data);
});

let favNumbers = [7, 11, 22];
$.getJSON(`${myUrl}/${favNumbers}?json`).then(data => {
  console.log(data);
});

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${myUrl}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
