import ButtonAssign from "./Button";

function App() {
  return (
    <div className="container">
      <ButtonAssign label="testing " size="SMALL" type="PRIMARY" />
      <ButtonAssign />
      <ButtonAssign label="testing " type="SECONDARY" disabled />
      <ButtonAssign
        type="PRIMARY"
        onClickHandler={() => alert("hello! you re great")}
      />
    </div>
  );
}

export default App;
