// JS written by Kaden Rose & 

"use strict";

// July 30th, starting a basic form validation function

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

// July 31st newsletter alert

// run function when page is loaded

document.addEventListener("DOMContentLoaded", function (){
    // check to see if user has already been on site during this browsing session
    if (sessionStorage.getItem("newsletterShown")) return;

    // a 5 second delay
    setTimeout(showNewsletterPopup, 5000);

    // function for newsletter
    function showNewsletterPopup() {
        // mark as shown so it won't show again til browser tab is closed
        sessionStorage.setItem("newsletterShown", "true");

        // create div and style it
        const popup = document.createElement("div");
        popup.id = "newsletter-popup";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "#fff";
        popup.style.padding = "20px";
        popup.style.border = "2px solid #333";
        popup.style.borderRadius = "8px";
        popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
        popup.style.zIndex = "9999";
        popup.style.textAlign = "center";

        popup.innerHTML = 
            `<h2>Join our newsletter</h2>
            <p>Get exclusive offers and updates.</p>
            <input type="email" id="newsletter-email" placeholder="Your email" style="padding:5px; width: 80%;">
            <br><br>
            <button id="newsletter-submit" style="padding:8px 12px;">Subscribe</button>
            <br><br>
            <button id="newsletter-close" style="background:none; border:none; color:red; cursor:pointer;">Close</button>`;

        // add this to the body
        document.body.appendChild(popup);

        // remove popup when user clicks remove
        document.getElementById("newsletter-close").addEventListener("click", function () {
            popup.remove();
        });

        // remove popup when users subscribes
        document.getElementById("newsletter-submit").addEventListener("click", function () {
            let mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let mailInput = document.getElementById("newsletter-email").value.trim();

            if (mailInput === ""){
                alert("Please enter your email address.");
                return;
            }
            if (!mailRegex.test(mailInput)){
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thanks for subscribing to our newsletter, see you on the trail! DISCLAIMER: This form is an educational demonstration, no real information was collected.");
            popup.remove();
        });
    }

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

