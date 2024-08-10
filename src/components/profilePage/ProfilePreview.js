import classes from '../css/ProfileHeader.module.css'

const ProfileIconComponent = () => {
    return (
            <div className={classes["profile-icon-container"]}>
                <h2 className={`${classes["name"]}  ${classes["profile-name"]}`}>John Doe</h2>
                <img className={classes["profile-icon"]}src={`${process.env.PUBLIC_URL}/img/profileIcon.webp`}  alt="profile-icon" />
            </div>
    );
}
const ProfilePreviewComponent = () => {
    return (
        <div className={`${classes["profile-preview-container"]}  ${"boxOfContent"}`}>
            <ProfileIconComponent />
        </div>
    );
}


export default ProfilePreviewComponent;