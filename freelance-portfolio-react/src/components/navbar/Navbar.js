import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";


const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";


    return (
        <nav className="nav">
        <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                    <p>Центр компетенций</p>
                    </NavLink>
               

                    <BtnDarkMode/>

                <ul className="nav-list">
                <li className="nav-list__item">
                            <NavLink to="/schedules" className={({ isActive }) => 
                                isActive ? activeLink : normalLink
                            } >
                               Расписание
                            </NavLink>          
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => 
                                isActive ? activeLink : normalLink
                            } >
                               Программы
                            </NavLink>          
                        </li>
                        {/* <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                            } >
                                Фотогалерея
                            </NavLink> 
                        </li> */}
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                            } >
                               О нас
                            </NavLink> 
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/welcome" className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                            } >
                               Войти
                            </NavLink> 
                        </li>
                </ul>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;