import { useParams } from "react-router-dom";
import ChatApp from "./ChatApp";
import ChatHeaderComponent from "./ChatHeader";
import MessageContactsComponent from "./Contacts";
import classes from "./messagesCss/mainMessages.module.css";

const MainMessagesComponent = ()=>{
    const { id: userId } = useParams();
    return (
        <section className={classes["messages-page"]}>
        {userId  &&  <ChatHeaderComponent userId={userId} />}
        <MessageContactsComponent/>
        {userId  && <ChatApp userId={userId}/>}
        </section>
    );
}
export default MainMessagesComponent;