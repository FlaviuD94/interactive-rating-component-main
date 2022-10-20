"use strict";

// const selectedRate = document
//   .querySelector("input[type='radio'][name='my-input']:checked")
//   .val();
const rateBtns = document.querySelectorAll(".rate-input");
const submitBtn = document.querySelector(".submit-btn");
const rateView = document.querySelector(".rate-section");
const thankyouView = document.querySelector(".thankyou-section");
const givenRate = document.getElementById("rating$");

rateBtns.forEach((el) =>
  el.addEventListener("click", function () {
    givenRate.textContent = el.value;
  })
);

function submit() {
  rateView.style.display = "none";
  thankyouView.style.display = "flex";
  console.log(selectedRate);
}

submitBtn.addEventListener("click", submit);
