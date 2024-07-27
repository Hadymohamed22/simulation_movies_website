window.onresize = () => {
  if (window.innerWidth >= 990) {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
};

const rightArrow = document.querySelector(".right-arrow"),
  leftArrow = document.querySelector(".left-arrow");
const movies = document.querySelector(".movies"),
  movieTitle = document.querySelector("movie-title"),
  movieType = document.querySelector(".movie-type"),
  movieDate = document.querySelector(".movie-date"),
  movieRate = document.querySelector(".movie-rate");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input[type=text]");
const homeLink = document.querySelector(".nav-link-home"),
  seriesLink = document.querySelector(".nav-link-series"),
  moviesLink = document.querySelector(".nav-link-movies"),
  kidsLink = document.querySelector(".nav-link-kids");

// check scroll movies
checkScrollMovies();

// movies scroll
rightArrow.addEventListener("click", () => (movies.scrollLeft += 151));
leftArrow.addEventListener("click", () => (movies.scrollLeft -= 151));

movies.onscroll = checkScrollMovies;
function checkScrollMovies() {
  movies.scrollLeft == 0
    ? (leftArrow.style.cssText = "display: none !important")
    : (leftArrow.style.cssText = "display: flex !important");
  movies.scrollLeft == 772
    ? (rightArrow.style.cssText = "display: none !important")
    : (rightArrow.style.cssText = "display: flex !important");
}

// fetch movies data and make movies

fetch("movie.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((ele) => {
      let { name, date, sposter, bposter, genre, imdb } = ele;
      let movie = document.createElement("a");
      movie.classList.add(
        "movie",
        "text-decoration-none",
        "slow-transition",
        "position-relative"
      );
      movie.innerHTML = `
                <img
                  src="${sposter}"
                  loading="lazy"
                  class="w-100 h-100 rounded-3"
                />
                <div
                  class="movie-info w-100 h-100 rounded-3 position-absolute top-0 left-0 slow-transition"
                >
                  <img
                    src="${bposter}"
                    loading="lazy"
                    class="w-100 h-100 rounded-3"
                  />
                  <div class="more-info position-absolute bottom-0 w-100 p-2">
                    <div class="name fw-bold main-color">${name}</div>
                    <div
                      class="des d-flex justify-content-between align-items-center text-white"
                    >
                      <div class="type_date">${genre},${date}</div>
                      <div class="rate main-color">
                        ${imdb}<i
                          class="bi bi-star-fill"
                          style="margin-left: 2px"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
    `;
      movies.appendChild(movie);
      let movieCard = document.createElement("a");
      movieCard.classList.add(
        "movie-card",
        "d-flex",
        "gap-2",
        "align-items-center",
        "text-decoration-none",
        "p-2",
        "my-1",
        "rounded-2"
      );
      movieCard.innerHTML = `
      <div class="movie-img">
                  <img
                    src="${sposter}"
                    class="img-fluid rounded-1"
                    loading="lazy"
                    width="30"
                    height="20"
                  />
                </div>
                <div class="movie-info text-black">
                  <h6 class="movie-name text-white m-0 mb-1">${name}</h6>
                  <p class="movie-more-info m-0">
                    <span>${genre},${date}</span>
                    <span class="movie-rate main-color ms-1"
                      >${imdb}<i class="bi bi-star-fill" style="margin-left: 2px"></i
                    ></span>
                  </p>
                </div>
      `;
      searchBox.appendChild(movieCard);

      // when click any link get the type (movie / series / kids)
    });

    // when click any link get the type (movie / series / kids)
    homeLink.addEventListener("click", () => {
      movies.innerHTML = "";

      let allMovie = data.filter((e) => {
        return e.type === "series" || "movie" || "kids";
      });
      allMovie.forEach((ele) => {
        let { name, date, sposter, bposter, genre, imdb } = ele;
        let movie = document.createElement("a");
        movie.classList.add(
          "movie",
          "text-decoration-none",
          "slow-transition",
          "position-relative"
        );
        movie.innerHTML = `
                  <img
                    src="${sposter}"
                    loading="lazy"
                    class="w-100 h-100 rounded-3"
                  />
                  <div
                    class="movie-info w-100 h-100 rounded-3 position-absolute top-0 left-0 slow-transition"
                  >
                    <img
                      src="${bposter}"
                      loading="lazy"
                      class="w-100 h-100 rounded-3"
                    />
                    <div class="more-info position-absolute bottom-0 w-100 p-2">
                      <div class="name fw-bold main-color">${name}</div>
                      <div
                        class="des d-flex justify-content-between align-items-center text-white"
                      >
                        <div class="type_date">${genre},${date}</div>
                        <div class="rate main-color">
                          ${imdb}<i
                            class="bi bi-star-fill"
                            style="margin-left: 2px"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
      `;
        movies.appendChild(movie);
      });
    });
    seriesLink.addEventListener("click", () => {
      movies.innerHTML = "";

      let seriesArr = data.filter((e) => {
        return e.type === "series";
      });
      seriesArr.forEach((ele) => {
        let { name, date, sposter, bposter, genre, imdb } = ele;
        let movie = document.createElement("a");
        movie.classList.add(
          "movie",
          "text-decoration-none",
          "slow-transition",
          "position-relative"
        );
        movie.innerHTML = `
                  <img
                    src="${sposter}"
                    loading="lazy"
                    class="w-100 h-100 rounded-3"
                  />
                  <div
                    class="movie-info w-100 h-100 rounded-3 position-absolute top-0 left-0 slow-transition"
                  >
                    <img
                      src="${bposter}"
                      loading="lazy"
                      class="w-100 h-100 rounded-3"
                    />
                    <div class="more-info position-absolute bottom-0 w-100 p-2">
                      <div class="name fw-bold main-color">${name}</div>
                      <div
                        class="des d-flex justify-content-between align-items-center text-white"
                      >
                        <div class="type_date">${genre},${date}</div>
                        <div class="rate main-color">
                          ${imdb}<i
                            class="bi bi-star-fill"
                            style="margin-left: 2px"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
      `;
        movies.appendChild(movie);
      });
    });
    moviesLink.addEventListener("click", () => {
      movies.innerHTML = "";

      let moviesArr = data.filter((e) => {
        return e.type === "movie";
      });
      moviesArr.forEach((ele) => {
        let { name, date, sposter, bposter, genre, imdb } = ele;
        let movie = document.createElement("a");
        movie.classList.add(
          "movie",
          "text-decoration-none",
          "slow-transition",
          "position-relative"
        );
        movie.innerHTML = `
                  <img
                    src="${sposter}"
                    loading="lazy"
                    class="w-100 h-100 rounded-3"
                  />
                  <div
                    class="movie-info w-100 h-100 rounded-3 position-absolute top-0 left-0 slow-transition"
                  >
                    <img
                      src="${bposter}"
                      loading="lazy"
                      class="w-100 h-100 rounded-3"
                    />
                    <div class="more-info position-absolute bottom-0 w-100 p-2">
                      <div class="name fw-bold main-color">${name}</div>
                      <div
                        class="des d-flex justify-content-between align-items-center text-white"
                      >
                        <div class="type_date">${genre},${date}</div>
                        <div class="rate main-color">
                          ${imdb}<i
                            class="bi bi-star-fill"
                            style="margin-left: 2px"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
      `;
        movies.appendChild(movie);
        // when click any link get the type (movie / series / kids)
      });
    });
    // search filter
    searchInput.addEventListener("focus", () => {
      searchInput.addEventListener("keyup", () => {
        let filter = searchInput.value.toUpperCase();
        let moviesCards = document.querySelectorAll(".movie-card");

        for (let i = 0; i < moviesCards.length; i++) {
          let content = moviesCards[i].querySelector(".movie-info");
          let textValue = content.innerHTML || content.innerText;
          if (textValue.toUpperCase().indexOf(filter) > -1) {
            moviesCards[i].style.cssText = "display: flex !important";
            searchBox.style.visibility = "visible";
          } else {
            moviesCards[i].style.cssText = "display: none !important";
          }
        }
      });
    });
    searchInput.addEventListener("blur", () => {
      searchBox.style.visibility = "hidden";
    });
  });
