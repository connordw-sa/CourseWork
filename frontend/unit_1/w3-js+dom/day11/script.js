import { rcg } from "../lib.js";

// EX7: Write a function to change the h1 text to something else

function changeHeader() {
  document.getElementsByTagName("h1")[0].addEventListener("click", function () {
    this.innerText =
      this.innerText == "Smartphone Shop"
        ? "Shop Smartphone"
        : "Smartphone Shop";
  });
}
changeHeader();
// EX8: Write a function to change the page background color

function changePageColor() {
  document
    .getElementsByTagName("body")[0]
    .addEventListener("click", function () {
      this.style.backgroundColor = rcg();
    });
}
changePageColor();

// EX9: Write a function to change the footer address with a fake one

function changeFooter() {
  document
    .getElementsByTagName("footer")[0]
    .addEventListener("click", function () {
      this.innerText =
        this.innerText == "123 Street, Cape Town, Smartphone Shop"
          ? "Click to change it back"
          : "123 Street, Cape Town, Smartphone Shop";
    });
}

changeFooter();

// EX10: Write a function to add a CSS class to every Amazon link

function addClass() {
  let links = document.getElementsByTagName("a");
  for (let link of links) {
    link.classList.add("aClass");
  }
}
addClass();

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

function toggleImage() {
  let images = document.getElementsByTagName("img");
  for (let img of images) {
    img.addEventListener("click", function () {
      img.classList.contains("imgClass")
        ? img.classList.remove("imgClass")
        : img.classList.add("imgClass");
    });
  }
}

toggleImage();

// EX12: Write a function to color the price of the products in a different one every time it’s invoked

function togglePrice() {
  let prices = document.getElementsByClassName("price");
  for (let el of prices) {
    el.addEventListener("click", function () {
      el.style.color = rcg();
    });
  }
}

togglePrice();
