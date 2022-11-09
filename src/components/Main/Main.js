
//import PromoData from "../../utils/const";
import { PromoData } from "../../utils/const";
import "./Main.scss"
import Orders from "./Orders/Orders";
import Promo from "./Promo/Promo";
import Public from "./Public/Public";
import Services from "./Services/Services";

function Main() {
    return(
        <main className="Main">
        <Promo

        data={PromoData}
        
        ></Promo>
        <Services></Services>
        <Public></Public>
        <Orders></Orders>
        
        
        </main>
    )
}

export default Main;