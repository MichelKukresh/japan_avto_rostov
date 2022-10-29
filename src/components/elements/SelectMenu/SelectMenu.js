import { useState } from "react";
import "./SelectMenu.scss";
import chevron from "../../../images/chevron.svg";

function SelectMenu({ data }) {
  const [isVisibleItem, seVisibleItem] = useState(false);
  const [dataLists, setDataLists] = useState({
    visibleTitle: data[0].title,
    visibleLink: data[0].link,
  });
  const [transformChevvron, setTransformChevvron ] = useState(false);

  function SelectMenuToggle() {
    seVisibleItem(!isVisibleItem);
    setTransformChevvron(true);
  }

  function selectionFromList(item) {
    setDataLists({ visibleTitle: item.title, visibleLink: item.link });
    seVisibleItem(!isVisibleItem);
    setTransformChevvron(false);
  }
  return (
    <>
      <div className={`SelectMenu ${isVisibleItem && "is-active"} `}>
        <div className="SelectMenu__header" onClick={() => SelectMenuToggle()}>
          <span className="SelectMenu__current" src={dataLists.visibleLink}>
            {dataLists.visibleTitle}
          </span>
          <div className={`SelectMenu__icon ${transformChevvron && "SelectMenu__icon_transform" }`}>
            <img alt="chevron" src={chevron}></img>
          </div>
        </div>

        <div className="SelectMenu__body">
          {data.map((item) => (
            <div
              key={Math.random().toString(16).slice(2)}
              src={item.link}
              className="SelectMenu__item"
              onClick={() => selectionFromList(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SelectMenu;
