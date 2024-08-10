import ProfilePreviewComponent from "./ProfilePreview";
import ProfileInfoComponent from "./ProfileInfo";
import ProfileWallpaperComponent from "./ProfileWallpaper";

const ProfileHeaderComponent = ()=>{
    return (
        <section className="profile-header">
            <ProfileWallpaperComponent />
            <div className="profile-description">
                <ProfilePreviewComponent />
                <ProfileInfoComponent />
            </div>
        </section>
    );
}

export default ProfileHeaderComponent;