import "./GeneralButton.scss";

function GeneralButton({ type, handle, text }) {
  function handleButton(e) {
    console.log("Нажали");
    //handle();
  }

  return (
    <button
      type={type}
      onClick={(e) => handleButton(e)}
      className="GeneralButton"
    >
      {text}
    </button>
  );
}

export default GeneralButton;

//шаблон для быстрой вставки: <GeneralButton  type="" handle={} text={} ></GeneralButton>
