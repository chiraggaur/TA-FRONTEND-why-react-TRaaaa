// selected html elements
let input = document.querySelector("#input_movie");
let list = document.querySelector(".movie_list");
let allMovies = [];
input.addEventListener("keyup", (event) => {
  // allMovies = [];
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovieUI(allMovies, list);
  }
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMovieUI(allMovies, list);
}

function createMovieUI(data, root) {
  root.innerHTML = "";
  data.forEach((elm, i) => {
    let li = document.createElement("li");
    li.classList.add("movie_list");
    let button = document.createElement("button");
    button.id = i;
    button.classList.add("movie_status");
    button.innerText = elm.watched ? "watched" : "To Watch";
    button.addEventListener("click", handleChange);
    let label = document.createElement("label");
    label.for = i;
    label.classList.add("movie_name");
    label.innerText = elm.name;
    label.append(button);
    li.append(label);
    list.append(li);
  });
}

createMovieUI(allMovies, list);

// status
