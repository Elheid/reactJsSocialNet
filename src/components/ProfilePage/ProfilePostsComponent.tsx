import { useState } from "react";
import { usePostList } from "../../contextProviders/PostsContext";
import SendMessageBoxComponent from "../SendMessage";
import Message from "../../classes/message";
import classes from "./profileCss/ProfilePosts.module.css"
import classNames from "classnames";
import PostItemComponent from "./ProfilePost";
import { MessageType } from "../../constants";
/**
 * Component for sending posts in a profile
 * @returns {JSX.Element} The post input component
 */
const SendPostComponent = () => {
    const [newMessage, setNewMessage] = useState<string>('');
    const {items, setItems} = usePostList();


    const addMessage = () => {
        if (newMessage.trim() !== "") { // Проверяем, что введено не пустое сообщение
            const message = new Message(newMessage);
            //const li = message.createMessageLi(items.length);
            setItems([...items, message]);
            setNewMessage(''); // Очищаем поле ввода
        }
    };
/*
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addMessage();
        }
    };*/

    return (
        <div className={classes["new-post"]}>
            <SendMessageBoxComponent
                classes={{
                    "chat-input": classes["chat-input"],
                    "message-to-send": classes["message-to-send"]
                }}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                addMessage={addMessage}
            />
        </div>
    );
}

const postContentList = ["Hello World!", ":O", "3rd message !"];
const listMessagesContent = postContentList.reverse();

const messages = Message.createMessages(listMessagesContent);




const listOfPosts = messages.map((message, index) =>
    message.createMessageLi(index, "profile-message")
);

/**
 * Component for all profile posts
 * @returns {JSX.Element} The post input component
 */
const ProfilePostsComponent = () => {
    const {items} = usePostList();
    //.profile-message
    return (
        <section className={classNames(classes.posts, "boxOfContent")}>
            
                <h3 className={classes["section-name"]}>My Posts:</h3>
                <SendPostComponent />
                <ul className={classes["posts-list"]}>
                    {items.slice().reverse().map((item: Message, index ) => (
                        //<li key={index}>{item}</li> // Рендерим каждый элемент
                        //item
                        <PostItemComponent
                            classesNames="profile-message"
                            key={index}
                            content={item.content}
                            avatarImg={item.avatarImg}
                            sender={item.type || MessageType.User}
                            timeSended={item.timeSended}
                        />
                    ))}
                    {listOfPosts}
                </ul>
        </section>
    );
}

export default ProfilePostsComponent;