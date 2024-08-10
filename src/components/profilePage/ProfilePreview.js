const ProfileIconComponent = () => {
    return (
            <div className="profile-icon-container">
                <h2 className="name profile-name">John Doe</h2>
                <img src={`${process.env.PUBLIC_URL}/img/profileIcon.webp`} className="profile-icon" alt="profile-icon" />
            </div>
    );
}
const ProfilePreviewComponent = () => {
    return (
        <div className="profile-preview-container box-of-content">
            <ProfileIconComponent />
        </div>
    );
}


export default ProfilePreviewComponent;