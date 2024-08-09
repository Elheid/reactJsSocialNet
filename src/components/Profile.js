
const ProfileComponent = () => {
    return (
        <div className="profile-page">
            <aside className="aside-nav">
                <ul className="list-of-pages">
                    <li className="page-item">Profile</li>
                    <li className="page-item">Messages</li>
                    <li className="page-item">News</li>
                    <li className="page-item">Music</li>
                    <li className="page-item">Settings</li>
                    <li className="page-item">Exit</li>
                </ul>
            </aside>
            <section className="profile">
                <div className="wallpaper-container">
                    <div className="wallpaper"></div>
                </div>
                
                <img src={`${process.env.PUBLIC_URL}/img/profileIcon.webp`} className="profile-icon" alt="profile-icon" />
                <div className="profile-info">
                    <ul className="info-list">
                        <li className="info-item">Name:</li>
                        <li className="info-item">Date of birth:</li>
                        <li className="info-item">City:</li>
                        <li className="info-item">Phone number</li>
                        <li className="info-item">Email address</li>
                    </ul>
                </div>
                <div className="posts">
                    <span>My Posts:</span>
                    <div className="new-post">
                        <textarea placeholder="text your post"></textarea>
                        <button className="send-post-button">Send</button>
                    </div>
                    <ul className="posts-list">
                        <li className="post-item">Hello world</li>
                        <li className="post-item">:O</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default ProfileComponent;