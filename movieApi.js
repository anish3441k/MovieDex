async function searchMovies(query) {

    const response = await fetch(
        `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
    );

    const data = await response.json();

    return data.results;
}