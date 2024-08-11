import classNames from "classnames";
import classes from '../profileCss/ProfileHeader.module.css'

const LiProfileComponent = (param)=>{

    return (
    <li className={classNames(classes["info-list"] ,classes[param.infoType])}>
    <span className={classNames("info", classes["info-type"])}>{param.name}:</span>
    <span className={classNames(param.infoType, 'info')}>{param.content}</span>
    </li>
    );
}
export default LiProfileComponent;