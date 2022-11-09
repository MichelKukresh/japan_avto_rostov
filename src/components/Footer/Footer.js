import TitleMenu from "../elements/TitleMenu/TitleMenu";
import "./Footer.scss";

function Footer () {
    return(
    
    
    <footer className="Footer">
        <div className="Footer__top-menu"><TitleMenu text="Каталог"/><TitleMenu text="О нас"/><TitleMenu text="Заказы"/></div>
        <div className="Footer__menu"><TitleMenu text="Каталог"/><TitleMenu text="Контакты"/></div>
        <div className="Footer__copyright">© 2022 АВТО ИЗ ЯПОНИИ</div>
        


        

    </footer>
    
    
    )
}

export default Footer;