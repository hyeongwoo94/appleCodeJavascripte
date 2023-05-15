document.querySelector(".list").addEventListener("click", function (e) {
  console.log(e.target.dataset.id);
  탭열기(e.target.dataset.id);
});
// for (let i = 0; i < document.getElementsByClassName("tab-button").length; i++) {
//   탭열기(i);
// }

function 탭열기(구멍) {
  document
    .querySelectorAll(".tab-button")
    [구멍].addEventListener("click", function () {
      document.querySelectorAll(".tab-content")[0].classList.remove("show");
      document.querySelectorAll(".tab-content")[1].classList.remove("show");
      document.querySelectorAll(".tab-content")[2].classList.remove("show");
      document.querySelectorAll(".tab-content")[구멍].classList.add("show");
      document.querySelectorAll(".tab-button")[0].classList.remove("orange");
      document.querySelectorAll(".tab-button")[1].classList.remove("orange");
      document.querySelectorAll(".tab-button")[2].classList.remove("orange");
      document.querySelectorAll(".tab-button")[구멍].classList.add("orange");
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
