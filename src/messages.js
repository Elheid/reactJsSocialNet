import classNames from 'classnames';
import React, { useState, useEffect, useRef } from 'react';

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
            setMessages([...messages, {
                type: 'user',
                content: newMessage,
                time: getCurrentTime()
            }]);
            setNewMessage('');
            setTimeout(() => {
                setMessages([...messages, {
                    type: 'bot',
                    content: getRandomItem(messageResponses),
                    time: getCurrentTime()
                }]);
            }, 1500);
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

    const getCurrentTime = () => {
        return new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    };

    const getRandomItem = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    return (
            <div className="chat-container">
                <div className="chat-history" ref={chatHistoryRef}>
                    <ul>
                {messages.map((message, index) => (
                    <li key={index} className={classNames(message, message.type)}>
                        <p>{message.content}</p>
                        <span className="time">{message.time}</span>
                    </li>
                ))}
                </ul>
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    id="message-to-send"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatApp;
