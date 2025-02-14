import classNames from 'classnames';
import { forwardRef } from 'react';


interface SendMessageBoxProps {
    classes: {
        "chat-input": string;
        "message-to-send": string;
    };
    newMessage: string;
    setNewMessage: (message: string) => void;
    addMessage: () => void;
}
/**
 * Component for sending messages in a chat interface
 * @param {SendMessageBoxProps} props - Component properties
 * @returns {JSX.Element} The message input box component
 */
const SendMessageBoxComponent = forwardRef<HTMLDivElement, SendMessageBoxProps>(
    (props, ref) => {
    return(
        <div className={classNames(props.classes["chat-input"], "chat-message")} ref={ref}>
        <textarea
    
            name={"message-to-send"}
            id={props.classes["message-to-send"]}
            rows={3}
            value={props.newMessage} // исп props.newMessage
            onChange={(e) => props.setNewMessage(e.target.value)} // Обновление newMessage в ChatApp
            onKeyDown={(e)=>
                {
                    if (e.key === 'Enter' && e.ctrlKey) {
                        props.addMessage();
                    }
                }}
            placeholder="Type your message">
        </textarea>
        <div className={"icons"}>
            <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o"></i>
        </div>

        <button className={"send-button"} onClick={props.addMessage}>Send</button>
    </div>
    );
})

export default SendMessageBoxComponent;