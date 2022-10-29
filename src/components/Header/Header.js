import "./Header.scss";

import burgerM from  "../../images/burgerM.svg";
import WAGreen from "../../images/gren-WA.svg";
import WAGrey from  "../../images/Whatsapp.svg";

import imgLogo from "../../images/logo.svg";
import imgLogo2 from "../../images/logo2.svg";
import phone from "../../images/phone.svg";
import GeneralButton from "../elements/GeneralButton/GeneralButton";
import SelectMenu from "../elements/SelectMenu/SelectMenu.js";
import prototipData from "../../utils/const";
import CircleText from "../elements/CircleText/CircleText";





   
    

function Header() {

  function handleWhatsApp () {
    window.location.href = 'https://api.whatsapp.com/send/?phone=79013437024';
  }



  return (
    <header className="Header">
      {/* <div className="Header__top-menu">
        <div className="Header__top-menu-container">
          <div className="Header__top-menu-element">
            <h3 className="Header__title-map">
              Россия, Москва, 38КМ МКАД, 6Бс1
            </h3>
          </div>

          <div className="Header__top-menu-element">
            <h3 className="Header__title-time">
              Время работы: c 08:00 до 21:00
            </h3>
          </div>

          <div className="Header__top-menu-element">
            <h3 onClick={()=>handleWhatsApp()} className="Header__title-whatsapp">Whatsapp</h3>
          </div>          
          
        </div>
      </div> */}

      <div className="Header__menu">
        <div className="Header__menu-container">
          <div className="Header__menu-pages">
            
            <img alt="логотип" src={imgLogo} />
            <h2 className="Header__headers">
              <CircleText text="5 лет"></CircleText> превосходим ваши ожидания
            </h2>
            <a className="Header__link" href="#">Услуги</a>
            <a className="Header__link" href="#">Полезное</a>
            <a className="Header__link" href="#">Контакты</a>
            <a className="Header__link" href="#">Новости</a>            
              
              <div className="Header__whatsapp" onClick={()=>handleWhatsApp()}></div>              
            <div>
            <h3  className="Header__phone" >+7 (800) 551-94-31 </h3>
            <h3 className="Header__text-addition">Бесплатная консультация</h3>


            </div>
            
            <GeneralButton
              type="submit"
              text="Задать вопрос"
              handle={() => console.log("нажата")}
              height="50px"
            ></GeneralButton>
            <img alt="логотип" src={burgerM} />
          </div>
          

        {/* <div className="Header__menu-select">
          <SelectMenu data={prototipData}></SelectMenu>
          <SelectMenu data={prototipData}></SelectMenu>
          <SelectMenu data={prototipData}></SelectMenu>
          <SelectMenu data={prototipData}></SelectMenu>
          <SelectMenu data={prototipData}></SelectMenu>
        </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
