import classes from '../css/ProfileHeader.module.css'
import classNames from 'classnames';

const ProfileWallpaperComponent = ()=>{
    const wallpaperLink = `${process.env.PUBLIC_URL}/img/wallpaper.png`;
    return(
        <div className={classNames(classes["wallpaper-container"] /*,"boxOfContent"*/)}>
        <img  className={classes["wallpaper"]} src={wallpaperLink} alt="wallpaper"/>
    </div>
    );
}

export default ProfileWallpaperComponent;