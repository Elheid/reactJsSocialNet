import classNames from 'classnames';
import classes from "./mainMessages.module.css";
import Message from '../../classes/message';

const ChatHeaderComponent = () => {
    return (
        <div className={classNames(classes["chat-header"], "clearfix", "box-of-content")}>
            <img className={classes["avatar"]} src={Message._defaulAvatarImg} alt="avatar"/>
            <div className={classes["chat-about"]}>
                <div className={classes["chat-with"]}>Chat with Vincent Porter</div>
                <div className={classes["chat-num-messages"]}>already 1 902 messages</div>
            </div>
            <i   className="fa fa-star"></i>
        </div>
    );
}
export default ChatHeaderComponent;