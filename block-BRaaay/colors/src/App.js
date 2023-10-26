import data from "./data";
import Green from "./Green";
function App() {
  return data.map((elm) => {
    // return elm.green.map((nelm) => {
    //   return <Green  {...nelm} />;
    // });
    return <Green {...elm.green} />;
  });
}

export default App;
