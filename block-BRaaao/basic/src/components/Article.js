// article component
import data from "../data";

// parent component taking data and sending to child
function Articledata() {
  <h2> Articles </h2>;
  return (
    <div className="articles_container">
      {data.map((elms) => {
        return <Article {...elms} />;
      })}
      ;
    </div>
  );
}

// compoent returnin elements
function Article(props) {
  return (
    <div className="card">
      <img src={props.urlToImage} className="images_cards" alt="cards" />
      <p className="title">{props.title}</p>
    </div>
  );
}

export default Articledata;
