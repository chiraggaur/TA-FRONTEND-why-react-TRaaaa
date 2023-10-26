import colors from "./colors";
function Color(props) {
  return colors[props.name].map((elm, i) => {
    return (
      <div className="colors_Container">
        <div className="colorBoxName">
          <p> {props.name}</p>
        </div>
        <div className="colorBoxContainers">
          <div className="div_Boxes" style={{ backgroundColor: elm }}></div>
          {i === 0 ? (
            <span className="count"> {50} </span>
          ) : (
            <span className="count"> {100 * i}</span>
          )}
          <span className="color_code"> {elm}</span>
        </div>
      </div>
    );
  });
}

export default Color;
