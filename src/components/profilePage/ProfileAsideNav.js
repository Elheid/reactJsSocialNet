//import classes from './profileCss/Profile.module.css'
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const LiNavComponent = (param) => {
    const link = `/${param.name}`
    return (
        <li className={"page-item"}>
            <NavLink to={link} className={"aside-nav-button"}>
               {/*< href={link} className={"aside-nav-button"}>*/}
                    <span className="name">{param.name}</span>
               {/* </a>*/}
            </NavLink>
        </li>
    );
}

const listOfPagesNames = ["Profile", "Messages", "News", "Music", "Settings", "Exit"];

const listOfPages = listOfPagesNames.map((name, index) =>
    <LiNavComponent name={name} key={index} />
);

const AsideNavComponent = () => {
    return (
        <aside className={"aside-nav"}>
            <ul className={classNames("page-item", "boxOfContent")}>
                {listOfPages}
            </ul>
        </aside>
    );
}


export default AsideNavComponent;