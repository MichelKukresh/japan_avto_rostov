import { ServicesData } from "../../../utils/const";
import "./Services.scss";

function Services() {
  return (
    <section className="Services">
      <h2 className="Services__title">Наши услуги</h2>
      <p className="Services__discription">
        Специалисты нашего автосервиса имеют огромный опыт в обслуживании
        автомобилей разных производителей, новых и с пробегом, поэтому в
        короткие сроки способны обнаружить и исправить любую поломку. Все работы
        проводятся в соответствии с рекомендациями производителей.
      </p>
      <ul className="Services__lists" >
        {ServicesData?.map((i) => <li className="Services__lists-item"><h3 className="Services__lists-title">{i.title}</h3> <h4 className="Services__lists-description">{i.description}</h4></li>)}
        
        
      </ul>
    </section>
  );
}

export default Services;
