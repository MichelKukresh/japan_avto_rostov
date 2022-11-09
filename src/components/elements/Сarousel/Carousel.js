import "./Carousel.scss";

import EllipseNoActiv from "../../../images/EllipseNoActiv.svg";
import EllipseActiv from "../../../images/EllipseA.svg";

function Carousel({ data, numberDataPromo }) {
  //console.log({ data, numberDataPromo });

  return (
    <>
      <div className="Carousel">
        {data.map((i) =>
          i.id === numberDataPromo + 1 ? (
            <div className="Carousel__activ">
              <div className="Carousel__activ-element"></div>
            </div>
          ) : (
            <div className="Carousel__no-activ"></div>
          )
        )}
      </div>
    </>
  );
}

export default Carousel;
