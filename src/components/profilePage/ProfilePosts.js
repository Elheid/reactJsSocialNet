import classNames from 'classnames';

import classes from './profileCss/ProfilePosts.module.css'
import Message from '../../classes/message';



const SendPostComponent =()=>{
    return (
        <div className={classes["new-post"]}>
        {/*<SendTextareaComponent />
        <SendButtonComponent />*/}
        <SendPostCintComponent />
        </div>
    );
}

const SendTextareaComponent = ()=>{
    return (
        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
    );
}
const SendPostCintComponent = ()=>{
    return (
        <div className="chat-message clearfix">
        <SendTextareaComponent />
        <div className="icons">
        <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o"></i>
        </div>
        
        <SendButtonComponent />

      </div>
    );
    /*return (
        <textarea placeholder="text your post"></textarea>
    );*/
}

const SendButtonComponent = ()=>{
    return (
        <button className={classes["send-post-button"]}>Send</button>
    );
}

const postContentList = ["Hello World!", ":O", "3rd message !"];
const listMessagesContent = postContentList.reverse();

const messages = Message.createMessages(listMessagesContent);
console.log(messages);


const PostItemComponent = (props) => {//`${process.env.PUBLIC_URL}/img/profileIcon.webp`
    return (
        <li className={classNames(classes["post-item"])}>
            <div className={classes["avatar-post-container"]}>
                <img className={classes["avatar-post"]} src={messages[0].avatarImg} alt="avatar" />
            </div>
            <span className={classes["post-text"]}>{props.text}</span>
        </li>
    );
}

const listOfPosts = messages.map(({content}, index) =>
    <PostItemComponent key={index} text={content}/>
);

const ProfilePostsComponent = () => {
    return (
        <section className={classNames(classes.posts, "boxOfContent")}>
            <h3 className={classes["section-name"]}>My Posts:</h3>
            <SendPostComponent />
            <ul className={classes["posts-list"]}>
                {listOfPosts}
                {/*<PostItemComponent text=":O"/>
                <PostItemComponent text="Hello World!"/>*/}
            </ul>
        </section>
    );
}

export default ProfilePostsComponent;