import colors from "./colors";
import Color from "./Color";
function App() {
  return Object.keys(colors).map((elm) => {
    return (
      <div className="wrapper">
        <Color name={elm} code={colors[elm]} />
      </div>
    );
  });
}

export default App;
