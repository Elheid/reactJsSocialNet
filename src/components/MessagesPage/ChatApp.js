import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames'; // You might need to install this: npm install classnames
import Message from '../../classes/message';

import classes from "./messagesCss/mainMessages.module.css";

function ChatApp() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const chatHistoryRef = useRef(null);

    const messageResponses = [
        'Why did the web developer leave the restaurant? Because of the table layout.',
        'How do you comfort a JavaScript bug? You console it.',
        'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
        'What is the most used language in programming? Profanity.',
        'What is the object-oriented way to become wealthy? Inheritance.',
        'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
    ];

    const addMessage = () => {
        if (newMessage.trim() !== '') {
            // Add user's message
            const message = new Message(newMessage);
            const li = message.createMessageLi(messages.length, "my-message");


            setMessages([...messages, li]);
            console.log(messages);

            // Send bot's reply after a delay
            setTimeout(() => {
                const botMessage = new Message(getRandomItem(messageResponses));
                setMessages((prevMessages) => [
                    ...prevMessages,
                    botMessage.createMessageLi(prevMessages.length, "other-message")
                ]);
            }, 1500);

            setNewMessage('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addMessage();
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    };

   /* const getCurrentTime = () => {
        return new Date().toLocaleTimeString().replace(/([d]+:[d]{2})(:[d]{2})(.*)/, "$1$3");
    };*/

    const getRandomItem = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    return (
        <div className={classNames(classes["container"], classes["chat"], "inner-box", "boxOfContent")}>
            <div className={classes["chat-history"]} ref={chatHistoryRef}>
                <ul className={classes["chat-message-list"]}>
                    {messages.map((message, index) => (
                        message // Используйте  message  как DOM-элемент 
                    ))}
                </ul>
            </div>
            <div className={classes["chat-input"]}>
                <textarea
                    name="message-to-send"
                    id={classes["message-to-send"]}
                    rows="3"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message">
                </textarea>
                <div className={classes["icons"]}>
                    <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-file-image-o"></i>
                </div>

                <button className={"send-button"} onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatApp;



