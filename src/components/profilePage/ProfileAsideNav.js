import classes from './profileCss/Profile.module.css'
import classNames from 'classnames';

const LiNavComponent = (param)=>{
    return (
    <li className={classes["page-item"]}>
        <a href="/" className="aside-nav-button">
            <span className="name">{param.name}</span>
        </a>
    </li>
    );
}

const listOfPagesNames = ["Profile", "Messages", "News", "Music", "Settings", "Exit"];

const listOfPages = listOfPagesNames.map((name, index) =>
    <LiNavComponent name={name} key={index} />
);

const AsideNavComponent = () => {
    return (
        <aside className={classes["aside-nav"]}>
            <ul className={classNames(classes["page-item"], "boxOfContent")}>
                {listOfPages}
            </ul>
        </aside>
    );
}


export default AsideNavComponent;