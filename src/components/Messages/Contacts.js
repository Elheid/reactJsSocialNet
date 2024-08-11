import classNames from "classnames";
import Message from "../../classes/message";
import classes from "./mainMessages.module.css";
const MessageContactsComponent = () => {
    return (
        <div className={classNames(classes["people-list"], "box-of-content")} id="people-list">
            <div className={classNames(classes["search"],"inner-box")}>
                <input type="text" placeholder="Search" wfd-id="id0" />
                <i className={classNames(classes["fa-search"],"fa-search" ,"fa")}></i>
            </div>
            <ul className={classNames("list", classes["contact-list"])}>
                {listOfContacts}
            </ul>
        </div>

    );
}

const ContactComponent = (props) => {
    return (
        <li className={classNames(classes["clearfix"], classes["contact-item"], "box-of-content", "inner-box")}>
            <img className={classNames(classes["avatar"], classes["contact-avatar"])} src={props.avatar} alt="avatar" />
            <div className={classes["about"]}>
                <div className={classes["name"]}>{props.name}</div>
                <div className={classes["status"]}>
                    <i className={classNames(classes[`${props.status}`], "fa", "fa-circle")}></i> 
                    {props.statusName}
                </div>
            </div>
        </li>
    )
}

const defaultAvatar = Message._defaulAvatarImg; 

const contacts = [
    {
      name: "Иван Иванов",
      statusName: "В сети",
      status:"online",
      avatar: defaultAvatar,
    },
    {
      name: "Екатерина Петрова",
      statusName: "Не в сети",
      status:"offline",
      avatar: defaultAvatar,
    },
    {
      name: "Алексей Сидоров",
      statusName: "В сети",
      status:"online",
      avatar: defaultAvatar,
    },
    {
      name: "Мария Кузнецова",
      statusName: "Не в сети",
      status:"offline",
      avatar: defaultAvatar,
    },
  ];


const listOfContacts = contacts.map(({name, status, statusName, avatar}, index) =>
    <ContactComponent key={index} name={name} status={status} statusName={statusName} avatar={avatar}/>
);


export default MessageContactsComponent;