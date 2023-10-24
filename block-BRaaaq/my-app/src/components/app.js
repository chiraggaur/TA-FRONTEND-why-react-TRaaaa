import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Articles from "./Article";
import footer from "./Footer";
import propTypes from "prop-types";
// component

function App() {
  return [
    <Header />,
    <Hero />,
    <>
      <h1 className="Article-heading"> Article </h1>
      <Articles />
    </>,
    <>
      <footer />
    </>,
  ];
}

export default App;
