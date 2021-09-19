let cards = document.querySelectorAll('.card');
cards.forEach(item => {
    item.addEventListener("mouseover", function(event) {
        event.target.style.transform = "rotate(0)";
    },
        );
}
);