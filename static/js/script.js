// Button Functionality
// Get the button and text class
const read_more_btn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

// Listen for a click event
read_more_btn.addEventListener("click", (e)=>{
    // Toggle the .more-text class 
    text.classList.toggle("show-more");
    // Change the "read more" text to "read less"
    if(read_more_btn.innerHTML === "Read More"){
        read_more_btn.innerHTML = "Read Less";
    } else {
        read_more_btn.innerHTML = "Read More";
    }
})


// Burger Functionality
// Get the burger and nav otions class
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-options");
const nav_options = document.querySelectorAll(".nav-options li");

// Listen for a click event, and toggle nav
burger.addEventListener("click", (e)=>{
    nav.classList.toggle("nav-active");

    // Animate links
    nav_options.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = "";
        } else {
            link.style.animation = `nav-option-fade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger animation
    burger.classList.toggle("toggle");
});
