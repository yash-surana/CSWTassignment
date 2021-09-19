let cards = document.querySelectorAll('.card-overlay');

// countries cards

cards.forEach(item => {
    item.addEventListener("mouseenter", function(event) {
        // highlight the mouseenter target
        event.target.style.height = "280px";
    },
    item.addEventListener("mouseleave", function(event) {
            // highlight the mouseenter target
            event.target.style.height = "120px";
        }));
    
}
);