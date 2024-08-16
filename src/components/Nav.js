import { Link, NavLink } from "react-router-dom";

const NavComponent = () => {
    return (
        <nav className="footer-nav">
            <ul className="nav-list footer">
                <Link to={"/"}></Link>
                <li className="nav-item">
                    <NavLink to="/Profile">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/">Что-то ещё</NavLink>
                </li>
                {/*<li className="nav-item">Кликер</li>*/}
            </ul>
        </nav>)
}



export default NavComponent;