import classes from './profileCss/Profile.module.css'
import classNames from 'classnames';

const LiNavComponent = (param)=>{
    const link = `/${param.name}`
    return (
    <li className={"page-item"}>
        <a href={link} className={"aside-nav-button"}>
            <span className="name">{param.name}</span>
        </a>
    </li>
    );
}

const listOfPagesNames = ["Profile", "Messanges", "News", "Music", "Settings", "Exit"];

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