import CircleText from "../../elements/CircleText/CircleText";
import GeneralButton from "../../elements/GeneralButton/GeneralButton";
import "./Promo.scss";
import nextButton from "../../../images/next.svg";

function Promo() {
  return (
    <section className="Promo">
      <div >
        <div className="Promo__container">
          <img className="Promo__next" alt="следующий"  src={nextButton}></img>

          <div className="Promo__slide">
            <CircleText text="В наличии 2 автомобиля"></CircleText>
            <h1 className="Promo__slide-title">Авто из Японии</h1>
            <span className="Promo__slide-slick">Риски по доставки берем на себя</span>
            <h2 className="Promo__slide-phone">+7 (800) 551-94-31</h2>
            <GeneralButton
              type=""
              handle={() => console.log("нажата")}
              text="Рассчитать стоимость"
              height="68px"
            ></GeneralButton>
            
          </div>

          <img className="Promo__next Promo__next_rotate" alt="следующий" src={nextButton}></img>
        </div>
      </div>
      
    </section>
  );
}

export default Promo;
