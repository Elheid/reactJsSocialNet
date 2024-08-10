const ProfilePostsComponent = () => {
    return (
        <section className="posts box-of-content">
            <h3 className="section-name">My Posts:</h3>
            <div className="new-post">
                <textarea placeholder="text your post"></textarea>
                <button className="send-post-button">Send</button>
            </div>
            <ul className="posts-list">
                <PostItemComponent text=":O"/>
                <PostItemComponent text="Hello World!"/>
            </ul>
        </section>
    );
}

const SendPostComponent =()=>{
    return (
        <div className="new-post">
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
        <button className="send-post-button">Send</button>
    );
}

const PostItemComponent = ({text}) => {
    return (
        <li className="post-item">
            <div className="avatar-post-container">
                <img src={`${process.env.PUBLIC_URL}/img/profileIcon.webp`} alt="avatar" className="avatar-post" />
            </div>
            <span className="post-text">{text}</span>
        </li>
    );
}
export default ProfilePostsComponent;