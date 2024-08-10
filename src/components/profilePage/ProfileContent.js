/*import ProfileIconComponent from "./ProfileIcon";
import ProfileInfoComponent from "./ProfileInfo";
import ProfileWallpaperComponent from "./ProfileWallpaper";*/
import ProfileHeaderComponent from "./ProfileHeader";
import ProfilePostsComponent from "./ProfilePosts";

import classes from '../css/Profile.module.css'

const ProfileContentComponent = () => {
    return (
        <section className={classes.profile}>
            <ProfileHeaderComponent/>
            <ProfilePostsComponent />
        </section>
    );
}
export default ProfileContentComponent;