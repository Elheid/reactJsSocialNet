const ProfileIconComponent = () => {
    return (
        <div className="profile-icon-container box-of-content">
            <h2 className="name profile-name">John Doe</h2>
            <img src={`${process.env.PUBLIC_URL}/img/profileIcon.webp`} className="profile-icon" alt="profile-icon" />
        </div>
    );
}

export default ProfileIconComponent;