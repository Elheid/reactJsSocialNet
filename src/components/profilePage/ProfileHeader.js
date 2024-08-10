import ProfilePreviewComponent from "./ProfilePreview";
import ProfileInfoComponent from "./ProfileInfo";
import ProfileWallpaperComponent from "./ProfileWallpaper";

import classes from '../css/ProfileHeader.module.css'


const ProfileHeaderComponent = ()=>{
    return (
        <section className={classes["profile-header"]}>
            <ProfileWallpaperComponent />
            <div className={classes["profile-description"]}>
                <ProfilePreviewComponent />
                <ProfileInfoComponent />
            </div>
        </section>
    );
}

export default ProfileHeaderComponent;