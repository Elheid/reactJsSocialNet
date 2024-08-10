import classNames from 'classnames';

import classes from '../css/ProfilePosts.module.css'

const ProfilePostsComponent = () => {
    return (
        <section className={classNames(classes.posts, "boxOfContent")}>
            <h3 className={classes["section-name"]}>My Posts:</h3>
            <SendPostComponent />
            <ul className={classes["posts-list"]}>
                <PostItemComponent text=":O"/>
                <PostItemComponent text="Hello World!"/>
            </ul>
        </section>
    );
}

const SendPostComponent =()=>{
    return (
        <div className={classes["new-post"]}>
        <SendTextareaComponent />
        <SendButtonComponent />
        </div>
    );
}

const SendTextareaComponent = ()=>{
    return (
        <textarea placeholder="text your post"></textarea>
    );
}

const SendButtonComponent = ()=>{
    return (
        <button className={classes["send-post-button"]}>Send</button>
    );
}

const PostItemComponent = (props) => {
    return (
        <li className={classNames(classes["post-item"])}>
            <div className={classes["avatar-post-container"]}>
                <img className={classes["avatar-post"]} src={`${process.env.PUBLIC_URL}/img/profileIcon.webp`} alt="avatar" />
            </div>
            <span className={classes["post-text"]}>{props.text}</span>
        </li>
    );
}
export default ProfilePostsComponent;