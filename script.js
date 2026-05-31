conconst searchButton = document.getElementById("searchBtn");

const searchInput = document.querySelector("input");

const movieResults = document.getElementById("movieResults");

searchButton.addEventListener("click", async () => {

    const query = searchInput.value;

    const movies = await searchMovies(query);

    displayMovies(movies);

});

function displayMovies(movies){

    movieResults.innerHTML = "";

    movies.forEach(movie => {

        const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "";

        const card = document.createElement("div");

        card.classList.add("movie-card");

        card.innerHTML = `

            <img src="${poster}" alt="${movie.title}">

            <div class="movie-info">

                <h2>${movie.title}</h2>

                <p>⭐ Rating: ${movie.vote_average}</p>

                <p>📅 ${movie.release_date}</p>

                <p>${movie.overview}</p>

            </div>

        `;

        movieResults.appendChild(card);

    });

}