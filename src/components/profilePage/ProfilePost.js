import classNames from 'classnames';
import classes from './profileCss/ProfilePosts.module.css'

const TimeComponent = (props)=>{
    return  <span className={classes["post-time"]}>{props.time}</span>
}
const formatDate = (date)=> {
    //console.log(date.toLocaleDateString());

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const dayOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][date.getDay()];

    return `${dayOfWeek},  ${hours}:${minutes}, ${day}.${month}.${year}`;
}

const PostItemComponent = (props) => {//`${process.env.PUBLIC_URL}/img/profileIcon.webp`

    const sender = (typeof props.sender !== 'undefined' && props.sender !== "") ? props.sender : "user";
    const time = props.timeSended ? formatDate(props.timeSended): null;
    return (
        <li className={classNames(classes["post-item"], sender)}>
            <div className={classes["avatar-post-container"]}>
                <img className={classes["avatar-post"]} src={props.avatarImg} alt="avatar" />
            </div>
            <span className={classes["post-text"]}>{props.text}</span>
            {time && <TimeComponent time={time} />}
        </li>
    );
}
export default PostItemComponent;