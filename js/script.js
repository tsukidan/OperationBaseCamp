"use strict";

// July 30th, starting a basic form validation function
// cartButton Functionality
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('cartButton').addEventListener('click', function() {
    window.location.href = 'checkout.html';
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
    // Only run if Swiper is loaded and swiper element exists
    if (typeof Swiper !== "undefined" && document.querySelector(".swiper")) {
        new Swiper(".swiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            breakpoints: {
                768: { slidesPerView: 3 },
                480: { slidesPerView: 2 },
                0: { slidesPerView: 1 }
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // =====================
    // Color Selection
    // =====================
    const colorButtons = document.querySelectorAll(".color-button");
    if (colorButtons.length) {
        colorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            colorButtons.forEach((btn) => btn.classList.remove("selected"));
            button.classList.add("selected");

            const selectedColor =
            button.querySelector(".color-dot")?.classList[1] || "";
            console.log("Selected color:", selectedColor);
        });
        });
    }

    // =====================
    // Size Selection
    // =====================
    const sizeButtons = document.querySelectorAll(".size-btn");
    if (sizeButtons.length) {
        sizeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            sizeButtons.forEach((btn) => btn.classList.remove("selected"));
            button.classList.add("selected");

            const selectedSize = button.textContent.trim();
            console.log("Selected size:", selectedSize);
        });
        });
    }

    // =====================
    // Quantity Selection
    // =====================
    const quantityDisplay = document.getElementById("quantity");
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");

    let quantity = 1;

    if (quantityDisplay && decreaseBtn && increaseBtn) {
        decreaseBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
        });

        increaseBtn.addEventListener("click", () => {
        quantity++;
        quantityDisplay.textContent = quantity;
        });
    }

    // =====================
    // Add to Cart Button
    // =====================
    const addToCartBtn = document.getElementById("addToCart");
    const cartStatus = document.getElementById("cartStatus");
    const cartCount = document.getElementById("cartCount");

    let cartQuantity = 0;

    if (addToCartBtn && cartStatus && cartCount) {
        addToCartBtn.addEventListener("click", () => {
        cartQuantity += quantity;
        cartCount.textContent = cartQuantity;
        cartStatus.style.display = "inline-block";
        });
    }

    // =====================
    // Product Description Accordion
    // =====================
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    if (accordionHeaders.length) {
        accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            item.classList.toggle("active");
        });
        });
    }

    // =====================
    // Product Image Carousel
    // =====================
    const images = document.querySelectorAll(".carousel-img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    function updateCarousel(index) {
        images.forEach((img) => img.classList.remove("active"));
        if (images[index]) {
        images[index].classList.add("active");
        }
    }

    if (images.length && prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel(currentIndex);
        });

        nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
        });
    }
    });

// function to filter and sort plp

    document.addEventListener("DOMContentLoaded", () => {
        const sortBtn = document.querySelector(".red1");
        const filterBtn = document.querySelector(".red2");
        const sortMenu = document.getElementById("sortMenu");
        const filterMenu = document.getElementById("filterMenu");
        const productGrid = document.querySelector(".product-cards .row");

    // Toggle menus
    sortBtn.addEventListener("click", () => {
        console.log("sort button clicked");
        sortMenu.classList.toggle("hidden");
        filterMenu.classList.add("hidden"); // close filter if open
    });
    filterBtn.addEventListener("click", () => {
        console.log("filter button has been clicked");
        filterMenu.classList.toggle("hidden");
        sortMenu.classList.add("hidden"); // close sort if open
    });

    // Sort function
    sortMenu.addEventListener("click", (e) => {
        if (e.target.dataset.sort) {
        const products = Array.from(productGrid.children);
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector(".card-text").textContent.replace("$", ""));
            const priceB = parseFloat(b.querySelector(".card-text").textContent.replace("$", ""));
            return e.target.dataset.sort === "low" ? priceA - priceB : priceB - priceA;
        });
        productGrid.innerHTML = "";
        products.forEach(p => productGrid.appendChild(p));
        sortMenu.classList.add("hidden");
        }
    });

    // Filter function
    filterMenu.addEventListener("click", (e) => {
        if (e.target.dataset.filter) {
        const filterValue = e.target.dataset.filter;
        document.querySelectorAll(".product-cards .col").forEach(card => {
            const imgSrc = card.querySelector("img").src.toLowerCase();
            if (filterValue === "all" || imgSrc.includes(filterValue)) {
            card.style.display = "";
            } else {
            card.style.display = "none";
            }
        });
        filterMenu.classList.add("hidden");
        }
    });
    });



