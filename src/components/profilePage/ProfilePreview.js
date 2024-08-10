import classes from '../css/ProfileHeader.module.css'
import classNames from 'classnames';
import ProfileIconComponent from './ProfileIcon';

const ProfilePreviewComponent = () => {
    return (
        <div className={classNames(classes["profile-preview-container"],  "inner-box", "boxOfContent")}>
            <ProfileIconComponent />
        </div>
    );
}


export default ProfilePreviewComponent;