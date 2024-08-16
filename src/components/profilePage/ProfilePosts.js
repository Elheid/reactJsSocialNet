import classNames from 'classnames';

import classes from './profileCss/ProfilePosts.module.css'
import Message from '../../classes/message';
import { createContext, useContext, useState } from "react";
import SendMessageBoxComponent from '../SendMessage';

const ListContext = createContext([]);

const SendPostComponent = () => {
    const [newMessage, setNewMessage] = useState('');
    const [items, setItems] = useContext(ListContext);


    const addMessage = () => {
        if (newMessage.trim() !== "") { // Проверяем, что введено не пустое сообщение
            const message = new Message(newMessage);
            const li = message.createMessageLi(items.length);
            setItems([...items, li]);
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
            {/*<SendPostContainerComponent />*/}
            <SendMessageBoxComponent
            classes={classes} 
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            //handleKeyDown={handleKeyDown} 
            addMessage={addMessage}  />
        </div>
    );
}
/*
const SendPostContainerComponent = () => {
    const [newMessage, setNewMessage] = useState('');
    const [items, setItems] = useContext(ListContext);

    const addMessage = () => {
        if (newMessage.trim() !== "") { // Проверяем, что введено не пустое сообщение
            const message = new Message(newMessage);
            const li = message.createMessageLi(items.length);
            setItems([...items, li]);
            setNewMessage(''); // Очищаем поле ввода
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addMessage();
        }
    };

    return (
        <div className="chat-message clearfix">
            <textarea name="message-to-send" 
            id="message-to-send"
            rows="3"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message">
            </textarea>
            <div className="icons">
                <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                <i className="fa fa-file-image-o"></i>
            </div>

            <button className={"send-button"}  onClick={addMessage} >Send</button>

        </div>
    );
}*/
/*
const SendButtonComponent = () => {
    return (
        <button className={classes["send-post-button"]}>Send</button>
    );
}*/

const postContentList = ["Hello World!", ":O", "3rd message !"];
const listMessagesContent = postContentList.reverse();

const messages = Message.createMessages(listMessagesContent);




const listOfPosts = messages.map((message, index) =>
    message.createMessageLi(index)
);

const ProfilePostsComponent = () => {
    const [items, setItems] = useState([]);
    return (
        <section className={classNames(classes.posts, "boxOfContent")}>
            <ListContext.Provider value={[items, setItems]}>
                <h3 className={classes["section-name"]}>My Posts:</h3>
                <SendPostComponent />
                <ul className={classes["posts-list"]}>
                    {items.slice().reverse().map((item, index) => (
                        //<li key={index}>{item}</li> // Рендерим каждый элемент
                        item
                    ))}
                    {listOfPosts}
                </ul>
            </ListContext.Provider>
        </section>
    );
}

export default ProfilePostsComponent;