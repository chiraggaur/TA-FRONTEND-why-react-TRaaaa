// selected html elements
let box = document.querySelector("#input_movie");
let list = document.querySelector(".movie_list");

let allMovies = [];

box.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovieUI();
  }
});

function createMovieUI() {
  allMovies.forEach((elm) => {
    let li = document.createElement("li");
    li.innerHTML = elm.name;
    list.append(li);
  });
}

// delete on cross from movie list and then create UI

function deleteMovie(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUI();
}
// error in event listener
