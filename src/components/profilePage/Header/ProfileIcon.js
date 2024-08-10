import classes from '../../css/ProfileHeader.module.css'
import classNames from 'classnames';

const ProfileIconComponent = () => {
    return (
            <div className={classes["profile-icon-container"]}>
                <h2 className={classNames(classes["name"], classes["profile-name"])}>John Doe</h2>
                <img className={classes["profile-icon"]} src={`${process.env.PUBLIC_URL}/img/profileIcon.webp`}  alt="profile-icon" />
            </div>
    );
}

export default ProfileIconComponent;