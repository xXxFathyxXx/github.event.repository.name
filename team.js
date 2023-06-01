// Create a new Swiper instance and assign it to the variable swiper
var swiper = new Swiper(".review-slider", {
        // Set the space between slides to 20 pixels
    spaceBetween :20,
        // Enable loop mode, allowing the slides to wrap around
    loop:true,
        // Configure autoplay settings
    autoplay:{
        delay:2500     // Delay between slide transitions in milliseconds
    },
    // Define responsive breakpoints for different screen sizes
    breakpoints:{
        640:{
            slidesPerView:1 // Show 1 slide per view on screens with width 640px or less
        },
        768:{
            slidesPerView:2 // Show 2 slides per view on screens with width between 641px and 768px
        },
        1024:{
            slidesPerView:3 // Show 3 slides per view on screens with width between 769px and 1024px
        }
    }
});