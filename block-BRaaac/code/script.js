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

//refactor code

function cElm(type, attr = {}, ...children) {
  let element = document.createElement(`${type}`);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }

  children.forEach((elm) => {
    if (typeof elm === "object") {
      element.append(elm);
    }
    if (typeof elm === "string") {
      let node = document.createTextNode(elm);
      element.append(node);
    }
  });
  return element;
}

function createMovieUI(data, root) {
  root.innerHTML = "";
  data.forEach((elm, i) => {
    let li = cElm(
      "li",
      {
        className: "movie_list",
      },
      cElm(
        "label",
        {
          "data-id": i,
          className: "movie_name",
        },
        elm.name,
        cElm(
          "button",
          {
            id: i,
            className: "movie_status",
          },
          elm.watched ? "watched" : "To Watch",
          addEventListener("click", handleChange)
        )
      )
    );
    list.append(li);
  });
}

createMovieUI(allMovies, list);

// status
