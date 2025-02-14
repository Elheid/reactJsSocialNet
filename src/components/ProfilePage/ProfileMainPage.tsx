import ProfileContentComponent from "./ProfileContent";

import classes from './profileCss/Profile.module.css'

/**
 * Displays all Profile page
 * @component
 * @returns {JSX.Element} The post item component
 */
const ProfilePageComponent = () => {
    return (
        <section className={classes["profile-page"]}>
            <ProfileContentComponent/>
        </section>
    );
}

export default ProfilePageComponent;