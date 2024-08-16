/*import ProfileIconComponent from "./ProfileIcon";
import ProfileInfoComponent from "./ProfileInfo";
import ProfileWallpaperComponent from "./ProfileWallpaper";*/
import Message from "../../classes/message";
import ProfileHeaderComponent from "./Header/ProfileHeader";
import ProfileInfoComponent from "./Header/ProfileInfo";
import ProfilePostsComponent from "./ProfilePosts";

import classNamees from './profileCss/Profile.module.css'

const ProfileContentComponent = () => {
    return (
        <div className={classNamees["profile-container"]}>
            <section className={classNamees.profile}>
                <ProfileHeaderComponent />
                <ProfilePostsComponent />
            </section>
            <aside className="aside-options">
                <div className="other-info">
                    images and videos
                    <ProfileInfoComponent />
                    friends
                    <ProfileInfoComponent />
                    communities
                    <ProfileInfoComponent />
                    favorites
                    <ProfileInfoComponent />
                </div>
                <div className="messages-side-bar">
                    <MessageSideBarComponent />
                </div>
            </aside>
        </div>
    );
}

const MessageSideBarComponent = () => {
    const avatar = Message._defaulAvatarImg;
    return (
        <div className="fixed-sidebar right boxOfContent">
            <div className="fixed-sidebar-right sidebar--small" id="sidebar-right">
                <div className="mCustomScrollbar ps ps--theme_default" data-mcs-theme="dark" data-ps-id="c4badb1f-c053-ead8-4269-d80e5fe1ccf6">
                    <ul className="chat-users">
                        <li className="inline-items js-chat-open">
                            <div className="author-thumb">
                                <img loading="lazy" alt="author" src={avatar} className="avatar" width="34" height="34" />
                                <span className="icon-status away"></span>
                            </div>
                        </li>
                        <li className="inline-items js-chat-open">
                            <div className="author-thumb">
                                <img loading="lazy" alt="author" src={avatar} className="avatar" width="34" height="34" />
                                <span className="icon-status online"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
export default ProfileContentComponent;