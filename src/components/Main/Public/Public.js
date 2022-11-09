import { PublicShortData } from "../../../utils/const";
import "./Public.scss";

function Public() {
  return (
    <section className="Public">
      <h2 className="Public__title">Публикации</h2>
      <ul className="Public__shot">
        {PublicShortData?.map((i) => (
          <li className="Public__shot-container">
            <div className="Public__shot-circle">
              <div
                style={{ backgroundImage: `url("${i.url}")` }}
                className="Public__shot-circle-list"
              ></div>
            </div>
            <p>{i.title}</p>
          </li>
        ))}{" "}
      </ul>
    </section>
  );
}

export default Public;
