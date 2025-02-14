import ProfileHeaderComponent from "./Header/ProfileHeader";
import ProfileInfoComponent from "./Header/ProfileInfo";
import { MessageSideBarComponent } from "./MessageSideBar/MessageSideBar";

import classNamees from './profileCss/Profile.module.css'
import ProfilePostsComponent from "./ProfilePostsComponent";


const temp = [
    <div className="temp" style={{height:25}}></div>,
    <div className="temp" style={{height:25}}></div>,
    <div className="temp" style={{height:25}}></div>,
    <div className="temp" style={{height:25}}></div>,
    <div className="temp" style={{height:25}}></div>,]

const ProfileContentComponent = () => {
    return (
        
        <div className={classNamees["profile-container"]}>
            <section className={classNamees.profile}>
                <ProfileHeaderComponent />
                <ProfilePostsComponent />
            </section>
            <aside className="aside-options">
                <div className="other-info">
                    <ProfileInfoComponent>
                    images and videos
                    {temp}
                    </ProfileInfoComponent>
                    
                    <ProfileInfoComponent>
                    friends
                    {temp}
                    </ProfileInfoComponent >

                    <ProfileInfoComponent>
                    communities
                    {temp}
                    </ProfileInfoComponent >

                    <ProfileInfoComponent>
                    favorites
                    {temp}
                    </ProfileInfoComponent >
                    
                </div>
                <div className="messages-side-bar">
                    <MessageSideBarComponent />
                </div>
            </aside>
        </div>
    );
}

export default ProfileContentComponent;