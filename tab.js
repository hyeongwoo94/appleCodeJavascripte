for(let i= 0; i < document.getElementsByClassName('tab-button').length; i++){
    document
    .querySelectorAll(".tab-button")[i]
    .addEventListener("click", function () {
    document.querySelectorAll(".tab-content")[0].classList.remove("show");
    document.querySelectorAll(".tab-content")[1].classList.remove("show");
    document.querySelectorAll(".tab-content")[2].classList.remove("show");
    document.querySelectorAll(".tab-content")[i].classList.add("show");
    document.querySelectorAll(".tab-button")[0].classList.remove("orange");
    document.querySelectorAll(".tab-button")[1].classList.remove("orange");
    document.querySelectorAll(".tab-button")[2].classList.remove("orange");
    document.querySelectorAll(".tab-button")[i].classList.add("orange");
    });
}

// document
// .querySelectorAll(".tab-button")[0]
// .addEventListener("click", function () {
//   document.querySelectorAll(".tab-content")[0].classList.remove("show");
//   document.querySelectorAll(".tab-content")[1].classList.remove("show");
//   document.querySelectorAll(".tab-content")[2].classList.remove("show");
//   document.querySelectorAll(".tab-content")[0].classList.add("show");
//   document.querySelectorAll(".tab-button")[0].classList.remove("orange");
//   document.querySelectorAll(".tab-button")[1].classList.remove("orange");
//   document.querySelectorAll(".tab-button")[2].classList.remove("orange");
//   document.querySelectorAll(".tab-button")[0].classList.add("orange");
// });

// document
// .querySelectorAll(".tab-button")[1]
// .addEventListener("click", function () {
//   document.querySelectorAll(".tab-content")[0].classList.remove("show");
//   document.querySelectorAll(".tab-content")[1].classList.remove("show");
//   document.querySelectorAll(".tab-content")[2].classList.remove("show");
//   document.querySelectorAll(".tab-content")[1].classList.add("show");
//   document.querySelectorAll(".tab-button")[0].classList.remove("orange");
//   document.querySelectorAll(".tab-button")[1].classList.remove("orange");
//   document.querySelectorAll(".tab-button")[2].classList.remove("orange");
//   document.querySelectorAll(".tab-button")[1].classList.add("orange");
// });

// document
// .querySelectorAll(".tab-button")[2]
// .addEventListener("click", function () {
//   document.querySelectorAll(".tab-content")[0].classList.remove("show");
//   document.querySelectorAll(".tab-content")[1].classList.remove("show");
//   document.querySelectorAll(".tab-content")[2].classList.remove("show");
//   document.querySelectorAll(".tab-content")[2].classList.add("show");
//   document.querySelectorAll(".tab-button")[0].classList.remove("orange");
//   document.querySelectorAll(".tab-button")[1].classList.remove("orange");
//   document.querySelectorAll(".tab-button")[2].classList.remove("orange");
//   document.querySelectorAll(".tab-button")[2].classList.add("orange");
// });


