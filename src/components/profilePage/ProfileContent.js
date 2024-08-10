/*import ProfileIconComponent from "./ProfileIcon";
import ProfileInfoComponent from "./ProfileInfo";
import ProfileWallpaperComponent from "./ProfileWallpaper";*/
import ProfileHeaderComponent from "./ProfileHeader";
import ProfilePostsComponent from "./ProfilePosts";

const ProfileContentComponent = () => {
    return (
        <section className="profile">
            <ProfileHeaderComponent/>
            <ProfilePostsComponent />
        </section>
    );
}
export default ProfileContentComponent;