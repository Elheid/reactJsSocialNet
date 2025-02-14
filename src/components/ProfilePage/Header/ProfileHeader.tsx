import ProfilePreviewComponent from "./ProfilePreview";
import ProfileInfoComponent from "./ProfileInfo";
import ProfileWallpaperComponent from "./ProfileWallpaper";

//import classes from '../css/ProfileHeader.module.css'
import classes from '../profileCss/ProfileHeader.module.css'
import classNames from "classnames";

/**
 * Profile header component containing wallpaper, preview, and info sections
 * @component
 * @returns {JSX.Element} The profile header component
 */
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