import classNames from 'classnames'; // You might need to install this: npm install classnames

const SendMessageBoxComponent = (props)=>{
    return(
        <div className={classNames(props.classes["chat-input"], "chat-message")}>
        <textarea
            name={"message-to-send"}
            id={props.classes["message-to-send"]}
            rows="3"
            value={props.newMessage} // Используй props.newMessage
            onChange={(e) => props.setNewMessage(e.target.value)} // Обнови newMessage в ChatApp
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
}

export default SendMessageBoxComponent;