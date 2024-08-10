import classes from '../css/ProfileHeader.module.css'

const ProfileWallpaperComponent = ()=>{
    const wallpaperLink = `${process.env.PUBLIC_URL}/img/wallpaper.png`;
    return(
        <div className={`${classes["wallpaper-container"]}  ${"boxOfContent"}`}>
        <img src={wallpaperLink} className={classes["wallpaper"]}/>
    </div>
    );
}

export default ProfileWallpaperComponent;