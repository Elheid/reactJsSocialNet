import classNames from "classnames";
import Message from "../../classes/message";
import classes from "./messagesCss/mainMessages.module.css";
import { NavLink } from "react-router-dom";


interface Contact {
    name: string;
    statusName: string;
    status: 'online' | 'offline';
    avatar: string;
}

interface ContactComponentProps extends Contact {
    userId: number;
}

/**
 * Contacts list component for messaging
 * @component
 * @returns {JSX.Element} The contacts list component
 */
const MessageContactsComponent = () => {
    return (
        <div className={classNames(classes["people-list"], "box-of-content")} id="people-list">
            <div className={classNames(classes["search"], "inner-box")}>
                <input type="text" placeholder="Search" wfd-id="id0" />
                <i className={classNames(classes["fa-search"], "fa-search", "fa")}></i>
            </div>
            <ul className={classNames("list", classes["contact-list"])}>
                {listOfContacts}
            </ul>
        </div>

    );
}

const ContactComponent = (    
    {userId, 
    name, 
    status, 
    statusName, 
    avatar 
} : ContactComponentProps) => {
    const path = `/Messages/${userId}`;
    

    return (
        <li className={classNames(classes["clearfix"], classes["contact-item"], "box-of-content", "inner-box")}>
            <NavLink  to={path}  
            className={({ isActive }) =>
                isActive ? `${classes["active-contact"]} ${classes["nav-contacts"]}` : `${classes["nav-contacts"]}`
            }>
                <img className={classNames(classes["avatar"], classes["contact-avatar"])} src={avatar} alt="avatar" />
                <div className={classes["about"]}>
                    <div className={classes["name"]}>{name}</div>
                    <div className={classes["status"]}>
                        <i className={classNames(classes[status], "fa", "fa-circle")}></i>
                        {statusName}
                    </div>
                </div>
            </NavLink>
        </li>
    );
}

const defaultAvatar = Message._defaultAvatarImg;

const contacts: Contact[] = [
    {
        name: "Иван Иванов",
        statusName: "В сети",
        status: "online",
        avatar: defaultAvatar,
    },
    {
        name: "Екатерина Петрова",
        statusName: "Не в сети",
        status: "offline",
        avatar: defaultAvatar,
    },
    {
        name: "Алексей Сидоров",
        statusName: "В сети",
        status: "online",
        avatar: defaultAvatar,
    },
    {
        name: "Мария Кузнецова",
        statusName: "Не в сети",
        status: "offline",
        avatar: defaultAvatar,
    },
];


const listOfContacts = contacts.map(({ name, status, statusName, avatar }, index) =>
    <ContactComponent key={index} userId={index} name={name} status={status} statusName={statusName} avatar={avatar} />
);


export default MessageContactsComponent;