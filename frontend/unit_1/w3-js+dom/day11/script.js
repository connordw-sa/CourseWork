// EX7: Write a function to change the h1 text to something else
let header = document.getElementsByTagName("h1");
function changeHeader() {
  header.addEventListener("click", () => {
    header.innerText = "Smartphone Shop"
      ? (header.innerText = "Shop Smartphone")
      : "Smartphone Shop";
  });
}

// EX8: Write a function to change the page background color

// EX9: Write a function to change the footer address with a fake one

// EX10: Write a function to add a CSS class to every Amazon link

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

// EX12: Write a function to color the price of the products in a different one every time it’s invoked
