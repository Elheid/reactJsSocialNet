import classNames from 'classnames';
import classes from "./messagesCss/mainMessages.module.css";
import Message from '../../classes/message';


interface User {
    id: number;
    name: string;
}

interface ChatHeaderProps {
    userId: string | number;
}

const usersNames: User[] = [{id:0, name:"Max"}, {id:1, name:"Andrew"}, {id:2, name:"Ann"}, {id:3, name:"Marry"}]


/**
 * Chat header component displaying chat participant information
 * @component
 * @param {Object} props - Component props
 * @param {string | number} props.userId - ID of the chat participant
 * @returns {JSX.Element} The chat header component
 */
const ChatHeaderComponent = ({ userId } : ChatHeaderProps) => {

    const chatName = usersNames.find(user => Number(userId) === user.id)?.name || 'Unknown';

    return (
        <div className={classNames(classes["chat-header"], "clearfix", "box-of-content")}>
            <img className={classes["avatar"]} src={Message._defaultAvatarImg} alt="avatar"/>
            <div className={classes["chat-about"]}>
                <div className={classes["chat-with"]}>{chatName}</div>
                <div className={classes[".chat-last-seen"]}>last seen 17.08.2024</div>
            </div>
            <i   className="fa fa-star"></i>
        </div>
    );
}
export default ChatHeaderComponent;