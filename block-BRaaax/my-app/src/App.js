import ButtonAssign from "./Button";

function App() {
  return (
    <div className="container">
      <ButtonAssign label="testing " size="SMALL" type="PRIMARY" />
      <ButtonAssign />
      <ButtonAssign label="testing " type="SECONDARY" />
      <ButtonAssign
        type="PRIMARY"
        onClickHandler={() => alert("hello! you re great")}
        disabled
      />
    </div>
  );
}

export default App;
