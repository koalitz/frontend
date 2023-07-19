import vk from "./../../img/icons/vk.svg";
import telegram from "./../../img/icons/telegram.svg";
import whatsapp from "./../../img/icons/whatsapp.svg"; 

import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={telegram} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={whatsapp} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>2023 prof.lipetsk.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;