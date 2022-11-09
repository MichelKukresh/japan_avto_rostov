import CircleText from "../../elements/CircleText/CircleText";
import GeneralButton from "../../elements/GeneralButton/GeneralButton";
import "./Promo.scss";
import nextButton from "../../../images/next.svg";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "../../elements/Сarousel/Carousel";
import {useSwipeable} from "react-swipeable";

function Promo({ data }) {
  const [dataPromo, setDataPromo] = useState({});
  const [numberDataPromo, setNumberDataPromo] = useState(0);

  const [carouselData, setCarouselData] = useState(0);

  let img = new Image();

  useEffect(() => {
    setDataPromo({
      title: data[numberDataPromo].title,
      url: data[numberDataPromo].url,
    });

    
    img.src = data[numberDataPromo].url;

    console.log(img.height, img.width);

    // предварительная загрузка картинок
    data.map((i) => <img src={i.url}></img>);

    const interval = setInterval(() => {
      handleNextButton();
    }, 10000);

    return () => clearInterval(interval);
  }, [numberDataPromo]);

  function handleNextButton() {
    if (numberDataPromo >= data.length - 1) {
      setNumberDataPromo(0);
    } else {
      setNumberDataPromo(numberDataPromo + 1);
    }
    
  }

  function handleBacktButton() {
    //console.log(numberDataPromo);
    //console.log(data.length);

    if (numberDataPromo <= 0) {
      setNumberDataPromo(data.length - 1);
    } else {
      setNumberDataPromo(numberDataPromo - 1);
    }
    
  }

  setTimeout(() => {
    setCarouselData(carouselData + 1);
  }, 10000);


  const handlers = useSwipeable({    
    onSwipedLeft:   () => handleNextButton () ,
    onSwipedRight: () => handleBacktButton(), 
  });

  
  return (
    
    <section
    {...handlers}
      className="Promo"
       style={{ backgroundImage: `url("${dataPromo.url}")` }}
    >
      {/* <img src={dataPromo.url}></img> */}
      <img
        onClick={() => handleBacktButton()}
        className="Promo__next"
        alt="следующий"
        src={nextButton}
      ></img>
      <div className="Promo__page">
        <div className="Promo__container">
          <div className="Promo__slide">
            <CircleText text="В наличии 2 автомобиля"></CircleText>
            <h1 className="Promo__slide-title">{dataPromo.title}</h1>
            <span className="Promo__slide-slick">
              Риски по доставки берем на себя
            </span>
            <h2 className="Promo__slide-phone">+7 (800) 551-94-31</h2>
            <GeneralButton
              type=""
              handle={() => console.log("нажата")}
              text="Рассчитать стоимость"
              height="50px"
            ></GeneralButton>
          </div>
        </div>
        <Carousel data={data} numberDataPromo={numberDataPromo}></Carousel>
       
      </div>
      <img
        onClick={() => handleNextButton()}
        className="Promo__next Promo__next_rotate"
        alt="следующий"
        src={nextButton}
      ></img>
      
    </section>
    
  );
}

export default Promo;
