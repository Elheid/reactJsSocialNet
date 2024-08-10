import ProfileIconComponent from "./ProfileIcon";
import ProfileInfoComponent from "./ProfileInfo";
import ProfilePostsComponent from "./ProfilePosts";
import ProfileWallpaperComponent from "./ProfileWallpaper";


const ProfileContentComponent = ()=>{
    return (
        <section className="profile">
        <ProfileWallpaperComponent />
        <ProfileIconComponent />
        <ProfileInfoComponent />
        <ProfilePostsComponent />
        </section>
    );
}
export default ProfileContentComponent;