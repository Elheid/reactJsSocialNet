import AsideNavComponent from "../ProfilePage/ProfileAsideNav";
import ChatApp from "./ChatApp";
import ChatHeaderComponent from "./ChatHeader";
import MessageContactsComponent from "./Contacts";
import classes from "./messagesCss/mainMessages.module.css";

const MainMessagesComponent = ()=>{
    return (
        <section className={classes["messages-page"]}>
        <AsideNavComponent />
        <ChatHeaderComponent />
        <MessageContactsComponent/>
        <ChatApp/>
        </section>
    );
}
export default MainMessagesComponent;