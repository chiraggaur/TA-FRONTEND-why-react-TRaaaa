function ButtonAssign(props) {
  function getStyled() {
    return `button button--${props.size} button--${props.type}`;
  }
  return (
    <>
      <button className={getStyled()} onClick={props.onClickHandler}>
        {props.label || "Button"}{" "}
      </button>
    </>
  );
}

export default ButtonAssign;
