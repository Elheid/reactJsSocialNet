import classes from '../profileCss/Profile.module.css'
import classNames from 'classnames';

//`${classes["page-item"]}  ${"boxOfContent"}`
const AsideNavComponent = () => {
    return (
        <aside className={classes["aside-nav"]}>
            <ul className={classNames(classes["page-item"], "boxOfContent")}>
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