const movies = {
    spawn: {
        title: "Spawn: Az Ivadék",
        director: "Rendező: Mark A.Z. Dippé",
        actors: "Szereplők: Michael Jai White, John Leguizamo, Martin Sheen",
        description: "Spawn visszatér az élők világába, hogy harcoljon a gonosz ellen és megmentse szeretteit.",
        video: "//videa.hu/player?v=yourSpawnVideoID"
    },
    powerrangers: {
        title: "Power Rangers (2017)",
        director: "Rendező: Dean Israelite",
        actors: "Szereplők: Dacre Montgomery, Naomi Scott, RJ Cyler",
        description: "Öt fiatal, akik különleges képességekkel rendelkeznek, összefognak, hogy megvédjék a Földet egy idegen fenyegetéstől.",
        video: "//videa.hu/player?v=nldP9ljn5gHwYnlU"
    },
    predator2018: {
        title: "Predator: A Ragadozó",
        director: "Rendező: Shane Black",
        actors: "Szereplők: Boyd Holbrook, Olivia Munn, Trevante Rhodes",
        description: "A ragadozó visszatér, hogy új vadászra leljen a dzsungelben.",
        video: "//videa.hu/player?v=yourPredatorVideoID"
    }
};

function openModal(id) {
    const movie = movies[id];
    if(!movie) return;

    document.getElementById("movieTitle").innerText = movie.title;
    document.getElementById("movieDirector").innerText = movie.director;
    document.getElementById("movieActors").innerText = movie.actors;
    document.getElementById("movieDescription").innerText = movie.description;
    document.getElementById("movieVideo").src = movie.video;

    document.getElementById("movieModal").style.display = "block";
}

function closeModal() {
    document.getElementById("movieModal").style.display = "none";
    document.getElementById("movieVideo").src = ""; // Stop video lejátszás
}

function searchMovie() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const blocks = document.querySelectorAll(".movie-block");
    blocks.forEach(block => {
        const title = block.querySelector("h3").innerText.toLowerCase();
        block.style.display = title.includes(input) ? "block" : "none";
    });
}