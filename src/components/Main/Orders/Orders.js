import { OrderstData } from "../../../utils/const";
import "./Orders.scss";

function Orders() {
  return (
    <section className="Orders">
      <h2 className="Orders__title">Выполненные заказы</h2>
      <ul className="Orders__shot">
        {OrderstData?.map((i) => (
          <li className="Orders__shot-container">
            <div className="Orders__shot-circle">
              <div
                style={{ backgroundImage: `url("${i.url}")` }}
                className="Orders__shot-circle-list"
              ></div>
            </div>
            <p>{i.title}</p>
          </li>
        ))}{" "}
      </ul>
    </section>
  );
}

export default Orders;
