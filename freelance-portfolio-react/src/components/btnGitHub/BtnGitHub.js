import "./style.css";
import telegramIcon from "./telegram.svg"

const BtnGitHub = ({link}) => {
    return (
        <a href={link}  target="_blank" rel="noreferrer" className="btn-outline">
            <img src={telegramIcon} alt="telegram" />
            Записаться
        </a>
    );

};

export default BtnGitHub;