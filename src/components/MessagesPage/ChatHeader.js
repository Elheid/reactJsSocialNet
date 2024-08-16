import classNames from 'classnames';
import classes from "./messagesCss/mainMessages.module.css";
import Message from '../../classes/message';

const usersNames = [{id:0, name:"Max"}, {id:1, name:"Andrew"}, {id:2, name:"Ann"}, {id:3, name:"Marry"}]
const ChatHeaderComponent = (param) => {
    debugger
    const chatName = usersNames.filter((obj)=> Number(param.userId) === obj.id)[0].name;
    return (
        <div className={classNames(classes["chat-header"], "clearfix", "box-of-content")}>
            <img className={classes["avatar"]} src={Message._defaulAvatarImg} alt="avatar"/>
            <div className={classes["chat-about"]}>
                <div className={classes["chat-with"]}>{chatName}</div>
                <div className={classes[".chat-last-seen"]}>last seen 17.08.2024</div>
            </div>
            <i   className="fa fa-star"></i>
        </div>
    );
}
export default ChatHeaderComponent;