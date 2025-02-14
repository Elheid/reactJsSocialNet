import React, { useState, useEffect, useRef, JSX } from 'react';
import classNames from 'classnames'; // You might need to install this: npm install classnames
import Message from '../../classes/message.js';

import classes from "./messagesCss/mainMessages.module.css";
import SendMessageBoxComponent from '../SendMessage.js';
import { MessageType } from '../../constants.js';
import ChatHeaderComponent from './ChatHeader.js';

interface MessageData {
    content: string;
    type: 'my-message' | 'other-message';
    id: number;
    timeSended: Date;
}

interface ChatAppProps {
    userId: string;
}


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


/**
 * Chat application component handling message exchange
 * @component
 * @param {Object} props - Component props
 * @param {string} props.userId - ID of the chat participant
 * @returns {JSX.Element} The chat application component
 */
const ChatApp = ({ userId }: ChatAppProps) => {
    const oldMessagesFromHistory: MessageData[] = [
        { content: "Привет, как дела?", type: "my-message", id: 0, timeSended: new Date('2023-10-26T10:00:00') },
        { content: "Я хорошо, а у тебя?", type: "other-message", id: 0, timeSended: new Date('2023-10-26T10:02:00') },
        { content: "Все отлично! Планируешь что-нибудь на выходные?", type: "my-message", id: 0, timeSended: new Date('2023-10-26T10:05:00') },
        { content: "Думаю съездить на природу. А ты?", type: "other-message", id: 0, timeSended: new Date('2023-10-26T10:07:00') },
        { content: "Звучит здорово! Я, возможно, присоединюсь.", type: "my-message", id: 0, timeSended: new Date('2023-10-26T10:10:00') },
        { content: "Буду рад! Время и место?", type: "other-message", id: 0, timeSended: new Date('2023-10-26T10:12:00') },
        { content: "Давай завтра утром в 9, у центрального парка.", type: "my-message", id: 0, timeSended: new Date('2023-10-26T10:15:00') },
        { content: "Идеально. Буду на месте!", type: "other-message", id: 0, timeSended: new Date('2023-10-26T10:17:00') },
        { content: "Отлично, до завтра!", type: "my-message", id: 0, timeSended: new Date('2023-10-26T10:20:00') },
        { content: "До встречи!", type: "other-message", id: 0, timeSended: new Date('2023-10-26T10:22:00') },
        { content: "Кстати, как прошло совещание?", type: "my-message", id: 1, timeSended: new Date('2023-10-26T11:00:00') },
        { content: "Все прошло гладко, решили все вопросы.", type: "other-message", id: 1, timeSended: new Date('2023-10-26T11:02:00') },
        { content: "Отличные новости. Ты сможешь завтра помочь с проектом?", type: "my-message", id: 1, timeSended: new Date('2023-10-26T11:05:00') },
        { content: "Конечно, я готов.", type: "other-message", id: 1, timeSended: new Date('2023-10-26T11:07:00') },
        { content: "Спасибо, твоя помощь очень важна.", type: "my-message", id: 1, timeSended: new Date('2023-10-26T11:10:00') },
        { content: "Всегда пожалуйста!", type: "other-message", id: 1, timeSended: new Date('2023-10-26T11:12:00') },
        { content: "Ты видел новую серию сериала?", type: "my-message", id: 2, timeSended: new Date('2023-10-26T12:00:00') },
        { content: "Да, она была потрясающей! Что думаешь?", type: "other-message", id: 2, timeSended: new Date('2023-10-26T12:02:00') },
        { content: "Согласен, сюжет становится все интереснее.", type: "my-message", id: 2, timeSended: new Date('2023-10-26T12:05:00') },
        { content: "Не могу дождаться следующей серии!", type: "other-message", id: 2, timeSended: new Date('2023-10-26T12:07:00') },
        { content: "Кстати, ты не забудешь подготовить документы для встречи?", type: "my-message", id: 3, timeSended: new Date('2023-10-26T13:00:00') },
        { content: "Уже работаю над этим.", type: "other-message", id: 3, timeSended: new Date('2023-10-26T13:02:00') },
        { content: "Отлично, тогда до завтра!", type: "my-message", id: 3, timeSended: new Date('2023-10-26T13:05:00') },
        { content: "До завтра, спокойной ночи!", type: "other-message", id: 3, timeSended: new Date('2023-10-26T13:07:00') },
        { content: "Спокойной ночи!", type: "my-message", id: 3, timeSended: new Date('2023-10-26T13:10:00') },
    ];


    const [messages, setMessages] = useState<JSX.Element[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [messagesFromHistory, setMessagesFromHistory] = useState<MessageData[]>(oldMessagesFromHistory);


    const chatHistoryRef = useRef<HTMLDivElement>(null);


    const getChatHistory = (userId: string): void => {
        setMessages([]);
        let index = messages.length;
        const messagesForUser = messagesFromHistory.filter(
            (message) => message.id === Number(userId)
        );

        const oldMessages = messagesForUser.map((message) => new Message(message.content, message.type as MessageType , message.timeSended));
        const list = oldMessages.map(message=> {
            //messagesFromHistory.push({content:message._content, type:message._sender, id:userId})
            return message.createMessageLi(index++)
        })

        setMessages(list);
    }


    const addMessage = (content: string, sender: 'my-message' | 'other-message'): void => {
        
        const message = new Message(content, sender as MessageType, getCurrentTime());
        const toAdd : MessageData = {content:message.content, type:message.type, timeSended:message.timeSended || getCurrentTime() ,id:Number(userId)};
        setMessagesFromHistory((prevHistory) => [...prevHistory, toAdd])

        //const message = new Message(content, sender as MessageType, getCurrentTime());
        const li = message.createMessageLi(messages.length);
        setMessages([...messages, li]);
        setNewMessage('');


        ///chatHistoryRef.current?.scrollIntoView({ behavior: 'smooth' });

    }

    
    useEffect(() => {
        // Загружаем историю после очистки
        if (userId) {
            getChatHistory(userId);
        }
    }, [userId]);



    const addBotMessage = (): void => {
        setTimeout(() => {
            const botReply = getRandomItem(messageResponses);
            const botMessage = new Message(botReply, "other-message" as MessageType, getCurrentTime());
            const toAdd : MessageData = {content:botReply, type:botMessage.type, timeSended:botMessage.timeSended || getCurrentTime() ,id:Number(userId)};

            setMessagesFromHistory((prevHistory) => [...prevHistory, toAdd])
            setMessages((prevMessages) => [
                ...prevMessages,
                botMessage.createMessageLi(prevMessages.length)
            ]);
        }, 1500);
    }

    const addMessageInChat = (): void => {
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

    const scrollToBottom = (): void => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    };

    const getCurrentTime = (): Date => {
        return new Date();
    };

    const getRandomItem = <T,>(arr: T[]): T => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    return (
        <div className={classes["container"]}>
        {userId  &&  <ChatHeaderComponent userId={userId} />}
                <div className={classNames(classes["container"], classes["chat"], "inner-box", "boxOfContent")}>
                    <div className={classes["chat-history"]}  ref={chatHistoryRef}>
                        <ul className={classes["chat-message-list"]}>
                            {messages.map((message) => (
                                message // Используйте  message  как DOM-элемент 
                            ))}
                        </ul>
                    </div>
                    <SendMessageBoxComponent
                        classes={{
                            "chat-input": classes["chat-input"],
                            "message-to-send": classes["message-to-send"]
                        }}
                        newMessage={newMessage}
                        setNewMessage={setNewMessage}
                        //handleKeyDown={handleKeyDown} 
                        addMessage={addMessageInChat} />
                </div>
        </div>
    );
}

export default ChatApp;



