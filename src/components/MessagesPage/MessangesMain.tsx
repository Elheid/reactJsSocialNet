import { useParams } from "react-router-dom";
import ChatApp from "./ChatApp";
import ChatHeaderComponent from "./ChatHeader";
import MessageContactsComponent from "./Contacts";
import classes from "./messagesCss/mainMessages.module.css";


/**
 * Messages section component
 * @component
 * @returns {JSX.Element} The profile header component
 */

const MainMessagesComponent = ()=>{
    const { id: userId } = useParams();
    return (
        <section className={classes["messages-page"]}>
        <MessageContactsComponent/>
        {userId  && <ChatApp userId={userId}/>}
        </section>
    );
}
export default MainMessagesComponent;