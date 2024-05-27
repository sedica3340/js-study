const URL = "https://yts.mx/api/v2/list_movies.json";
const URL2 = "https://yts.mx/api/v2/movie_details.json";
const $movieList = document.querySelector(".movie-list");
const render = (movieList) => {
    $movieList.textContent = "";
    movieList.forEach((movie) => {
        const $template = document.querySelector("#single-movie");
        const $div = document.importNode($template.content, true);

        $div.querySelector(".img-box img").setAttribute(
            "src",
            `${movie.medium_cover_image}`
        );
        $div.querySelector(".movie-id").value = movie.id;
        $div.querySelector(".title").textContent = movie.title;
        $div.querySelector(".year").textContent = movie.year;
        $div.querySelector(".rating").textContent = movie.rating;
        $movieList.appendChild($div);
    });
};

function load(sort) {
    fetch(`${URL}?sort_by=${sort}`)
        .then((res) => res.json())
        .then((json) => json.data.movies)
        .then((movies) => render(movies));
}

document.querySelector(".gnb").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.matches("#s_rate")) {
        load("download_count&order_by=desc");
    } else if (e.target.matches("#s_year")) {
        load("year");
    } else if (e.target.matches("#s_like")) {
        load("like_count&order_by=desc");
    } else return;
});

$movieList.addEventListener("click", (e) => {
    const $movie = e.target.closest("div.movie");
    if (!$movie.matches(".movie")) return;
    const movieId = $movie.querySelector(".movie-id").value;
    console.log(movieId);

    fetch(`${URL2}?movie_id=${movieId}`)
        .then((res) => res.json())
        .then((json) => json.data.movie)
        .then((movie) => renderModal(movie));

    
});

function renderModal(movie) {
    const $modal = document.querySelector(".modal");
    $modal.classList.remove("fade");
    $modal.querySelector(".modal-title").textContent = movie.title;
    $modal.querySelector(".modal-body img").setAttribute("src", `${movie.large_cover_image}`);
}
load();
