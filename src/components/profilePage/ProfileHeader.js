import ProfilePreviewComponent from "./ProfilePreview";
import ProfileInfoComponent from "./ProfileInfo";
import ProfileWallpaperComponent from "./ProfileWallpaper";

import classes from '../css/ProfileHeader.module.css'
import classNames from "classnames";


const ProfileHeaderComponent = ()=>{
    return (
        <section className={classNames(classes["profile-header"], "boxOfContent")}>
            <ProfileWallpaperComponent />
            <div className={classes["profile-description"]}>
                <ProfilePreviewComponent />
                <ProfileInfoComponent />
            </div>
        </section>
    );
}

export default ProfileHeaderComponent;