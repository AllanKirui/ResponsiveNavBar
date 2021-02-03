// Get the button and text class
const read_more_btn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

// Listen for a click even
read_more_btn.addEventListener("click", (e)=>{
    // Toggle the .more-text class 
    text.classList.toggle("show-more");
})