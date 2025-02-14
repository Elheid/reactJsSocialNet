import classNames from "classnames";
import classes from '../profileCss/ProfileHeader.module.css'


interface LiProfileComponentProps {
    infoType: string;
    name: string;
    content: string | number;
}

/**
 * Profile information list item component
 * @component
 * @param {Object} props - Component props
 * @param {string} props.infoType - The type of information (used for styling)
 * @param {string} props.name - The label/name of the information
 * @param {string | number} props.content - The content/value of the information
 * @returns {JSX.Element} The profile information list item component
 */
const LiProfileComponent = (param : LiProfileComponentProps)=>{

    return (
    <li className={classNames(classes["info-list"] ,classes[param.infoType])}>
    <span className={classNames("info", classes["info-type"])}>{param.name}:</span>
    <span className={classNames(param.infoType, 'info')}>{param.content}</span>
    </li>
    );
}
export default LiProfileComponent;