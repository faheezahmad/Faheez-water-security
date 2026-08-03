// ===============================
// Faheez Ahmad Website Script
// ===============================

// Search Box
const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.indexOf(value) > -1) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// Welcome Message
window.onload = function () {
    console.log("Welcome to Faheez Ahmad Website");
};

// Smooth Scroll
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href && href.startsWith("#")) {

            e.preventDefault();

            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
