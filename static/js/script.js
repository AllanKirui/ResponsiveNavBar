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

// Listen for a click event
burger.addEventListener("click", (e)=>{
    nav.classList.toggle("nav-active");
})
