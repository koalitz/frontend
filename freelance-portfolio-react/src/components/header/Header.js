import "./style.css";
import background from "../../img/icons/background.svg";

const Header = () => {
    return (
        
        <header className="header">
        <div className="header-back">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Центр компетенций</strong><br />
            </h1>
            <div className="header__text">
                <p>Государственное образовательное учреждение "Центр компетенций"</p>
                <p className="header__text__container"> Мы занимаемся повышением квалификации детей в области IT-индустрии. Наша основная площадка находится в лагере "Прометей", через который свой путь в IT может найти каждый. </p>
            </div>
                <a href="#!" className="btn">Связаться с нами</a>
        </div>
        </div>
        </header>
    );

}

export default Header;