import "./Header.scss";
import map from "../../images/map.svg";
import clock from "../../images/clock.svg";
import Whatsapp from "../../images/Whatsapp.svg";

import imgLogo from "../../images/logo.svg"
import phone from "../../images/phone.svg"
import GeneralButton from "../elements/GeneralButton/GeneralButton";

function Header() {
  return (
    <header className="Header">

      <div className="Header__top-menu">
        <div className="Header__top-menu-container">
          <img alt="местоположение" src={map} />
          <h3 className="Header__title">Россия, Москва, 38КМ МКАД, 6Бс1</h3>
          <img alt="часы" src={clock} />
          <h3 className="Header__title">Время работы: c 08:00 до 21:00</h3>
          <img alt="Whatsapp" src={Whatsapp} />
          <h3 className="Header__title">Whatsapp</h3>
        </div>
      </div>

      <div className="Header__menu">
        <div className="Header__menu-container">
          <img alt="логотип" src={imgLogo}/>
          <h2><span>10 лет</span>превосходим ваши ожидания</h2>
          <a href="#">Подбор авто</a>
          <a href="#">О компании</a>
          <a href="#">Отзывы</a>
          <a href="#">Контакты</a>
          <div>
            <img alt="телефон" src={phone}/><h3>+7 (800) 551-94-31</h3>


          </div>
          <GeneralButton type="submit" text="нажми меня" ></GeneralButton>


            

        </div>
      </div>

    </header>
  );
}

export default Header;
