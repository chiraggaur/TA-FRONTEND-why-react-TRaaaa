// data
let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

//ques-1
function handleClick() {
  alert("you clicked me ");
}

// ques-2
function handleClick2() {
  alert(
    " To learn React use https://reactjs.org``React and ReactDOM works together``Babel helps in writing JSX"
  );
}
//ques-3
function userNames(name, event) {
  alert(`Hello ${name}`);
  //   console.log(event);
}

// ques- 4
function Class() {
  return (
    <div>
      <button onClick={(event) => userNames("Aryan", event)}> Aryan </button>
      <button onClick={() => userNames("John")}> John </button>
      <button onClick={() => userNames("Bran")}> Bran </button>
    </div>
  );
}
// ques-5
function FruitsName() {
  return fruits.map((elm) => {
    return <Test3 {...elm} />;
  });
}

function Test3(props) {
  return (
    <div>
      <button key={props.id} onClick={(event) => userNames(props.value, event)}>
        {props.value}
      </button>
    </div>
  );
}

function Test(props) {
  return (
    <>
      <button onClick={handleClick} id="click-button">
        Test Click
      </button>
      {/* ques-2 */}
      <button onClick={handleClick2} id="click-button">
        How can I help you?
      </button>
      {/* ques-3 */}
      <div>
        <button onClick={(event) => userNames("Aryan", event)}> Aryan </button>
        <button onClick={() => userNames("John")}> John </button>
        <button onClick={() => userNames("Bran")}> Bran </button>
      </div>
    </>
  );
}

export default Test;
export { FruitsName };
export { Class };

// react commit test
