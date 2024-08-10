/*import ProfileIconComponent from "./ProfileIcon";
import ProfileInfoComponent from "./ProfileInfo";
import ProfileWallpaperComponent from "./ProfileWallpaper";*/
import ProfileHeaderComponent from "./Header/ProfileHeader";
import ProfilePostsComponent from "./ProfilePosts";

import classes from './profileCss/Profile.module.css'

const ProfileContentComponent = () => {
    return (
        <section className={classes.profile}>
            <ProfileHeaderComponent/>
            <ProfilePostsComponent />
        </section>
    );
}
export default ProfileContentComponent;