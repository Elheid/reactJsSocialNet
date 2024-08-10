import AsideNavComponent from "./ProfileAsideNav";
import ProfileContentComponent from "./ProfileContent";

import classes from '../profileCss/Profile.module.css'

const ProfilePageComponent = () => {
    return (
        <section className={classes["profile-page"]}>
            <AsideNavComponent />
            <ProfileContentComponent/>
        </section>
    );
}

export default ProfilePageComponent;