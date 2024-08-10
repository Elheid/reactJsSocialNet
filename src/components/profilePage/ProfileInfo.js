import classes from '../css/ProfileHeader.module.css'

const ProfileInfoComponent = () => {
    return (
        <section className={`${classes["profile-info"]}  ${"boxOfContent"}`}>
            <ul className={classes["info-list"]} >
                <li className={`${classes["info-list"]}  ${classes["name"]}`}>
                    <span className={classes["info-type"]}>Name:</span>
                    <span className="name info">Jonh Doe</span>
                </li>
                <li className={`${classes["info-list"]}  ${classes["birth-date"]}`}>
                    <span className={classes["info-type"]}>Date of birth:</span>
                    <span className={`${classes["info"]}  ${classes["birth-date"]}`}>12.10.1998</span>
                </li>
                <li className={`${classes["info-list"]}  ${classes["city-name"]}`}>
                    <span className={classes["info-type"]}>City:</span>
                    <span className={`${classes["info"]}  ${classes["city-name"]}`}>Azeroth</span>
                </li>
                <li className={`${classes["info-list"]}  ${classes["phone-number"]}`}>
                    <span className={classes["info-type"]}>Phone number:</span>
                    <span className={`${classes["info"]}  ${classes["phone-number"]}`}>+79127347045</span>
                </li>
                <li className={`${classes["info-list"]}  ${classes["email"]}`}>
                    <span className={classes["info-type"]}>Email address:</span>
                    <span className={`${classes["info"]}  ${classes["email"]}`}>abcd@gmail.com</span>
                </li>
            </ul>
        </section>
    );
}

export default ProfileInfoComponent;