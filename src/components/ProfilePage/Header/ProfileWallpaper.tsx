import { DEFAULT_WALLPAPER_IMG } from '../../../constants';
import classes from '../profileCss/ProfileHeader.module.css'
import classNames from 'classnames';


/**
 * Wallpaper for the header
 * @component
 * @returns {JSX.Element} The side navigation component
 */
const ProfileWallpaperComponent = ()=>{
    const wallpaperLink = `${DEFAULT_WALLPAPER_IMG}`;
    return(
        <div className={classNames(classes["wallpaper-container"] /*,"boxOfContent"*/)}>
        <img  className={classes["wallpaper"]} src={wallpaperLink} alt="wallpaper"/>
    </div>
    );
}

export default ProfileWallpaperComponent;