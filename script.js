const searchInput = document.getElementById("searchInput");
const movieCards = document.querySelectorAll(".movie-card");
const watchBtn = document.getElementById("watchBtn");

searchInput.addEventListener("input", function () {
    const search = searchInput.value.toLowerCase();

    movieCards.forEach(function (card) {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const genre = card.querySelector("p").textContent.toLowerCase();

        if (title.includes(search) || genre.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

watchBtn.addEventListener("click", function () {
    alert("Enjoy the movie! 🎬");
});

movieCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const title = card.querySelector("h3").textContent;

        alert("You selected: " + title);
    });
});