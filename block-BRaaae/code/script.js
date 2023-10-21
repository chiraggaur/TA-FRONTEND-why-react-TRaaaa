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

// function cElm(type, attr = {}, ...children) {
//   let element = document.createElement(`${type}`);
//   for (let key in attr) {
//     if (key.startsWith("data-")) {
//       element.setAttribute(key, attr[key]);
//     } else if (key.startsWith("on")) {
//       let events = key.replace("on", "");
//       element.addEventListener(events, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }

//   children.forEach((elm) => {
//     if (typeof elm === "object") {
//       element.append(elm);
//     }
//     if (typeof elm === "string") {
//       let node = document.createTextNode(elm);
//       element.append(node);
//     }
//   });
//   return element;
// }

// let cElm = React.createElement();

function createMovieUI(data, root) {
  //   root.innerHTML = "";
  let ui = data.map((elm, i) => {
    return React.createElement(
      "li",
      {
        className: "movie_list",
      },
      React.createElement(
        "label",
        {
          for: i,
          className: "movie_name",
        },
        elm.name,
        React.createElement(
          "button",
          {
            id: i,
            className: "movie_status",
            onClick: handleChange,
          },
          elm.watched ? "watched" : "To Watch"
          //   addEventListener("click", handleChange)
        )
      )
    );
  });
  ReactDOM.render(ui, root);
}

createMovieUI(allMovies, list);

// status
