import classes from '../css/Profile.module.css'
import classNames from 'classnames';


const AsideNavComponent = () => {
    return (
        <aside className={classes["aside-nav"]}>
            <ul className={`${classes["page-item"]}  ${"boxOfContent"}`}>
                <li className={classes["page-item"]}>Profile</li>
                <li className={classes["page-item"]}>Messages</li>
                <li className={classes["page-item"]}>News</li>
                <li className={classes["page-item"]}>Music</li>
                <li className={classes["page-item"]}>Settings</li>
                <li className={classes["page-item"]}>Exit</li>
            </ul>
        </aside>
    );
}

export default AsideNavComponent;