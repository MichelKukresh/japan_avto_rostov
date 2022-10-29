import "./GeneralButton.scss";

function GeneralButton({ type, handle, text, height }) {
  function handleButton(e) {    
    handle();
  }

  return (
    <button
      type={type}
      onClick={(e) => handleButton(e)}
      className="GeneralButton"
      style={{minHeight: height}}
    >
      {text}
    </button>
  );
}

export default GeneralButton;

//шаблон для быстрой вставки: <GeneralButton  type="" handle={()=>console.log("нажата")} text=""  height="50px" ></GeneralButton>
