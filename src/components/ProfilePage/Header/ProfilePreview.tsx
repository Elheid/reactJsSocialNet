import classes from '../profileCss/ProfileHeader.module.css'
import classNames from 'classnames';
import ProfileIconComponent from './ProfileIcon';

/**
 * Profile preview icon component
 * @component
 * @returns {JSX.Element} The side navigation component
 */
const ProfilePreviewComponent = () => {
    return (
        <div className={classNames(classes["profile-preview-container"],  "inner-box", "boxOfContent")}>
            <ProfileIconComponent />
        </div>
    );
}


export default ProfilePreviewComponent;