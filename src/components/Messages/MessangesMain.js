import AsideNavComponent from "../profilePage/ProfileAsideNav";
import ChatApp from "./ChatApp";
import classes from "./mainMessages.module.css";

const MainMessagesComponent = ()=>{
    return (
        <section className={classes["messages-page"]}>
        <AsideNavComponent />
        <ChatApp/>
        </section>
    );
}
export default MainMessagesComponent;