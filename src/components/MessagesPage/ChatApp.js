import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames'; // You might need to install this: npm install classnames
import Message from '../../classes/message';

import classes from "./messagesCss/mainMessages.module.css";
import SendMessageBoxComponent from '../SendMessage.js';
import { useParams } from 'react-router-dom';

const messagesFromHistory = [
    { content: "Привет, как дела?", type: "my-message", id: 0 },
    { content: "Я хорошо, а у тебя?", type: "other-message", id: 0 },
    { content: "Все отлично! Планируешь что-нибудь на выходные?", type: "my-message", id: 0 },
    { content: "Думаю съездить на природу. А ты?", type: "other-message", id: 0 },
    { content: "Звучит здорово! Я, возможно, присоединюсь.", type: "my-message", id: 0 },
    { content: "Буду рад! Время и место?", type: "other-message", id: 0 },
    { content: "Давай завтра утром в 9, у центрального парка.", type: "my-message", id: 0 },
    { content: "Идеально. Буду на месте!", type: "other-message", id: 0 },
    { content: "Отлично, до завтра!", type: "my-message", id: 0 },
    { content: "До встречи!", type: "other-message", id: 0 },
    { content: "Кстати, как прошло совещание?", type: "my-message", id: 1 },
    { content: "Все прошло гладко, решили все вопросы.", type: "other-message", id: 1 },
    { content: "Отличные новости. Ты сможешь завтра помочь с проектом?", type: "my-message", id: 1 },
    { content: "Конечно, я готов.", type: "other-message", id: 1 },
    { content: "Спасибо, твоя помощь очень важна.", type: "my-message", id: 1 },
    { content: "Всегда пожалуйста!", type: "other-message", id: 1 },
    { content: "Ты видел новую серию сериала?", type: "my-message", id: 2 },
    { content: "Да, она была потрясающей! Что думаешь?", type: "other-message", id: 2 },
    { content: "Согласен, сюжет становится все интереснее.", type: "my-message", id: 2 },
    { content: "Не могу дождаться следующей серии!", type: "other-message", id: 2 },
    { content: "Кстати, ты не забудешь подготовить документы для встречи?", type: "my-message", id: 3 },
    { content: "Уже работаю над этим.", type: "other-message", id: 3 },
    { content: "Отлично, тогда до завтра!", type: "my-message", id: 3 },
    { content: "До завтра, спокойной ночи!", type: "other-message", id: 3 },
    { content: "Спокойной ночи!", type: "my-message", id: 3 },
];


const messageResponses = [
    "Привет! Как твои дела?",
    "Здравствуйте! Как настроение?",
    "Привет! Рада тебя слышать.",
    "Добрый день! Как проходит твой день?",
    "Привет! Что нового?",
    "Здравствуйте! Как у тебя всё?",
    "Привет! Чем занимался сегодня?",
    "Добрый день! Как у тебя дела?",
    "Привет! Как ты?",
    "Здравствуйте! Рад тебя видеть."
];



function ChatApp(param) {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const chatHistoryRef = useRef(null);

    const userId  = param.userId;

    const getChatHistory = (userId) => {
        let index = messages.length;
        const messagesForUser = messagesFromHistory.filter(
            (message) => message.id === Number(userId)
        );
        const oldMessages = messagesForUser.map((message) => new Message(message.content, message.type));
        const list = oldMessages.map(message=> {
            messagesFromHistory.push({content:message._content, type:message._sender, id:userId})
            return message.createMessageLi(index++, message._sender)
        })
        setMessages(list);
    }


    const addMessage = (content, sender) => {
        messagesFromHistory.push({content:content, type:sender, id:userId})
        const message = new Message(content, sender);
        const li = message.createMessageLi(messages.length, sender);
        setMessages([...messages, li]);
        setNewMessage('');
        chatHistoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }


    // Загрузка старых сообщений при монтировании компонента
    useEffect(() => {
        setMessages([]);
        getChatHistory(userId);

        //fetchOldMessages();
    }, [userId]); // Запускается только один раз при монтировании



    const addBotMessage = () => {
        setTimeout(() => {
            const botMessage = new Message(getRandomItem(messageResponses));
            messagesFromHistory.push({content:botMessage._content, type:botMessage._sender, id:userId})
            setMessages((prevMessages) => [
                ...prevMessages,
                botMessage.createMessageLi(prevMessages.length, "other-message")
            ]);
        }, 1500);
    }

    const addMessageInChat = () => {
        if (newMessage.trim() !== '') {
            // Add user's message
            addMessage(newMessage, "my-message")
            // Send bot's reply after a delay
            addBotMessage();
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
            <SendMessageBoxComponent
                classes={classes}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                //handleKeyDown={handleKeyDown} 
                addMessage={addMessageInChat} />
        </div>
    );
}

export default ChatApp;



