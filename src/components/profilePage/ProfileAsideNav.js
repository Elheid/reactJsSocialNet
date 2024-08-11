import classes from './profileCss/Profile.module.css'
import classNames from 'classnames';

const LiNavComponent = (param)=>{
    const link = `/${param.name}`
    return (
    <li className={classes["page-item"]}>
        <a href={link} className={classes["aside-nav-button"]}>
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
        <aside className={classes["aside-nav"]}>
            <ul className={classNames(classes["page-item"], "boxOfContent")}>
                {listOfPages}
            </ul>
        </aside>
    );
}


export default AsideNavComponent;