import classNames from 'classnames';
import classes from './profileCss/ProfilePosts.module.css'


interface TimeComponentProps {
    time: string;
}

interface PostItemProps {
    sender?: string;
    timeSended?: Date;
    avatarImg: string;
    content: string;
    classesNames?:string;
}

/**
 * Displays the time of a post in a formatted way
 * @component
 * @param {Object} props - Component props
 * @param {string} props.time - The formatted time string to display
 * @returns {JSX.Element} The time display component
 */
const TimeComponent = (props : TimeComponentProps) => {
    return  <span className={classes["post-time"]}>{props.time}</span>
}

/**
 * Formats a date object into a readable string
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const dayOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][date.getDay()];

    return `${dayOfWeek},  ${hours}:${minutes}, ${day}.${month}.${year}`;
};

/**
 * Displays a single post item with avatar, text, and timestamp
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.sender] - The sender of the post (defaults to "user")
 * @param {Date} [props.timeSended] - The timestamp of when the post was sent
 * @param {string} props.avatarImg - URL of the avatar image
 * @param {string} props.text - The content of the post
 * @returns {JSX.Element} The post item component
 */
const PostItemComponent = (props : PostItemProps) => {//`${process.env.PUBLIC_URL}/img/profileIcon.webp`
    const sender = (typeof props.sender !== 'undefined' && props.sender !== "") ? props.sender : "user";
    const time = props.timeSended ? formatDate(props.timeSended) : null;
    console.log(props.classesNames)
    return (
        <li className={classNames(classes["post-item"], sender, props.classesNames)}>
            <div className={classes["avatar-post-container"]}>
                <img className={classes["avatar-post"]} src={props.avatarImg} alt="avatar" />
            </div>
            <span className={classes["post-text"]}>{props.content}</span>
            {time && <TimeComponent time={time} />}
        </li>
    );
};

export default PostItemComponent;