import AsideNavComponent from "./ProfileAsideNav";
import ProfileContentComponent from "./ProfileContent";

const ProfilePageComponent = () => {
    return (
        <section className="profile-page">
            <AsideNavComponent />
            <ProfileContentComponent/>
        </section>
    );
}

export default ProfilePageComponent;