function ButtonAssign(props) {
  function getStyled() {
    return `button button--${props.size} button--${props.type}`;
  }
  return (
    <>
      <button
        className={getStyled()}
        onClick={props.onClickHandler}
        disabled={props.disabled}
      >
        {props.label || "Button"}{" "}
      </button>
    </>
  );
}

export default ButtonAssign;
