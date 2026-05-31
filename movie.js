```javascript
const API_KEY = "6a782c30983b74d5e01dbab7cf128327";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

async function loadMovie() {

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,similar`
  );

  const data = await res.json();

  document.getElementById("title").innerText = data.title;

  document.getElementById("overview").innerText = data.overview;

  document.getElementById("poster").src =
    `https://image.tmdb.org/t/p/w500${data.poster_path}`;

  // CAST
  const castContainer = document.getElementById("cast");

  castContainer.innerHTML = "";

  data.credits.cast.slice(0, 8).forEach(actor => {

    castContainer.innerHTML += `
      <div class="card">
        <img src="https://image.tmdb.org/t/p/w300${actor.profile_path}">
        <p>${actor.name}</p>
      </div>
    `;

  });

  // SIMILAR MOVIES
  const similarContainer = document.getElementById("similar");

  similarContainer.innerHTML = "";

  data.similar.results.slice(0, 8).forEach(movie => {

    similarContainer.innerHTML += `
      <div class="card">
        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
        <p>${movie.title}</p>
      </div>
    `;

  });

}

loadMovie();
```
