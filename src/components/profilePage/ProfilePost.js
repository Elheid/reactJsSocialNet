import classNames from 'classnames';
import classes from './profileCss/ProfilePosts.module.css'

const PostItemComponent = (props) => {//`${process.env.PUBLIC_URL}/img/profileIcon.webp`
    const sender = (typeof props.sender !== 'undefined' && props.sender !== "") ? props.sender : "user";
    return (
        <li className={classNames(classes["post-item"], sender)}>
            <div className={classes["avatar-post-container"]}>
                <img className={classes["avatar-post"]} src={props.avatarImg} alt="avatar" />
            </div>
            <span className={classes["post-text"]}>{props.text}</span>
        </li>
    );
}
export default PostItemComponent;