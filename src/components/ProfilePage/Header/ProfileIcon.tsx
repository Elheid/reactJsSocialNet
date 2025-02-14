import { DEFAULT_AVATAR_IMG } from '../../../constants';
import classes from '../profileCss/ProfileHeader.module.css'
import classNames from 'classnames';

interface ProfileIconProps {
    name?: string;
    avatarUrl?: string;
}

/**
 * Profile icon component displaying user's avatar and name
 * @component
 * @param {Object} [props] - Component props
 * @param {string} [props.name="John Doe"] - The user's name
 * @param {string} [props.avatarUrl=DEFAULT_AVATAR_IMG] - URL of the user's avatar
 * @returns {JSX.Element} The profile icon component
 */
const ProfileIconComponent = ({ 
    name = "John Doe", 
    avatarUrl = DEFAULT_AVATAR_IMG 
}: ProfileIconProps) => {
    return (
        <div className={classes["profile-icon-container"]}>
            <h2 className={classNames(classes["name"], classes["profile-name"])}>
                {name}
            </h2>
            <img 
                className={classes["profile-icon"]} 
                src={avatarUrl} 
                alt="profile-icon" 
            />
        </div>
    );
};
export default ProfileIconComponent;