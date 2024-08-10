import classes from '../css/ProfileHeader.module.css'
import classNames from 'classnames';

const ProfileInfoComponent = () => {
    return (
        <section className={classNames(classes["profile-info"],"boxOfContent", "inner-box")}>
            <ul className={classes["info-list"]} >
                <li className={classNames(classes["info-list"] ,classes["name"])}>
                    <span className={classes["info-type"]}>Name:</span>
                    <span className="name info">Jonh Doe</span>
                </li>
                <li className={classNames(classes["info-list"], classes["birth-date"])}>
                    <span className={classes["info-type"]}>Date of birth:</span>
                    <span className={classNames(classes["info"],classes["birth-date"])}>12.10.1998</span>
                </li>
                <li className={classNames(classes["info-list"], classes["city-name"])}>
                    <span className={classes["info-type"]}>City:</span>
                    <span className={classNames(classes["info"], classes["city-name"])}>Azeroth</span>
                </li>
                <li className={classNames(classes["info-list"], classes["phone-number"])}>
                    <span className={classes["info-type"]}>Phone number:</span>
                    <span className={classNames(classes["info"], classes["phone-number"])}>+79127347045</span>
                </li>
                <li className={classNames(classes["info-list"], classes["email"])}>
                    <span className={classes["info-type"]}>Email address:</span>
                    <span className={classNames(classes["info"], classes["email"])}>abcd@gmail.com</span>
                </li>
            </ul>
        </section>
    );
}

export default ProfileInfoComponent;