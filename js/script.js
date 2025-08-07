"use strict";

// July 30th, starting a basic form validation function
// cartButton Functionality
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('cartButton').addEventListener('click', function() {
    window.location.href = 'cart.html';
  });
});

function formValidation1() {
    // create a boolean variable that tells us if the form is true or not
    let isValid = true;

    // variables for the inputs
    let inputNameFirst = document.getElementById(""); // name input
    let inputNameLast = document.getElementById("");
    let inputMail = document.getElementById(""); // email input
    let inputTel = document.getElementById(""); // phone input
    let radioMail = document.getElementById(""); // preferred method of contact radio email
    let radioTel = document.getElementById(""); // preferred method of contact radio phone

    // box(es) to list errors
    let eBox = document.getElementById("");

    // reset eBox to an empty string

    // create an output of errors, this works if the errors are displayed as a list
    let output = "<ul>";

    // REGEX validation
    let firstNameRegex = /^[A-Za-z]+(?:[-'][A-Za-z]+)*$/;
    let lastNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-'\s][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    let mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telRegex = /^\+?[0-9\s\-().]{7,20}$/;

    // Remove error class (depends on what the class is named)
    inputNameFirst.classList.remove("");
    inputNameLast.classList.remove("");
    inputMail.classList.remove("");
    inputTel.classList.remove("");
    eBox.classList.remove("");

    // validate first name

    //validate last name

    // validate email

    // validate phone number

    // validate method of contact

    // add output to the page
    output += "</ul>";
    eBox.innerHTML += output;

    // if form is valid output
    if(isValid === true){
        alert(`Thank you, ${inputNameFirst.value} for reaching out! A team member will address your concerns promptly. DISCLAIMER: This is a demonstration form for an educational project. No real information has been gathered.`)
    }
}

// form validation for newsletter signup
document.addEventListener("DOMContentLoaded", function() {
    // grab newsletter forms only
    let newsletterForms = document.querySelectorAll(".newsletter form");
    
    // loop through each form
    newsletterForms.forEach(function (form) {
        let mailInput = form.querySelector("input");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // reset error class & clear error box
            mailInput.classList.remove("error");
            let eBox = form.closest(".newsletter").querySelector(".eBoxNewsletter");
            eBox.textContent = "";

            // regex for email
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // empty check
            if (mailInput.value.trim() === "") {
                mailInput.classList.add("error");
                eBox.textContent = "Please enter your email address.";
                return;
            }

            // check email format
            if (!emailRegex.test(mailInput.value.trim())) {
                mailInput.classList.add("error");
                eBox.textContent = "Please enter a valid email address.";
                return;
            }

            // success
            alert("Thank you for subscribing! #StayWild! (DEMO only, no real information was stored)");
            mailInput.value = "";
        });
    });
});


// event listener to operate swipe.js on checkout page 'You Might Also Like'
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper", {
        slidesPerView: 3, // Show 3 at a time
        spaceBetween: 20, // Gap between slides
        loop: true, // Infinite loop
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
        768: { slidesPerView: 3 }, // Tablets & up
        480: { slidesPerView: 2 }, // Small tablets
        0: { slidesPerView: 1 }    // Mobile
        }
    });
});

// Product Options
// Color Selection
const colorButtons = document.querySelectorAll('.color-button');

  colorButtons.forEach(button => {
    button.addEventListener('click', () => {
      colorButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');

      
      const selectedColor = button.querySelector('.color-dot').classList[1]; 
      console.log("Selected color:", selectedColor); 
    });
  });
// Size Selection
const sizeButtons = document.querySelectorAll('.size-btn');

  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // cancel other buttons' selected styles
      sizeButtons.forEach(btn => btn.classList.remove('selected'));

      // Add selected style to the clicked button
      button.classList.add('selected');

      // Selected size (optional)
      const selectedSize = button.textContent;
      console.log("Selected size:", selectedSize);
    });
  });
// Quantity Selection
const quantityDisplay = document.getElementById('quantity');
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');

  let quantity = 1;

  decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });
// Add to Cart Button
const addToCartBtn = document.getElementById('addToCart');
  const cartStatus = document.getElementById('cartStatus');
  const cartCount = document.getElementById('cartCount');

  let cartQuantity = 0; // Tracking the total quantity in the cart

  addToCartBtn.addEventListener('click', () => {
    // Add the currently selected product quantity (from the quantity variable)
    cartQuantity += quantity;
    cartCount.textContent = cartQuantity;

    // Show the cart icon and number
    cartStatus.style.display = 'inline-block';
  });

// Product Description Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });
  // Product image Carousel
const images = document.querySelectorAll('.carousel-img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;

  function updateCarousel(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(currentIndex);
  });

