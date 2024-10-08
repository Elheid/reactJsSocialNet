import PostItemComponent from "../components/ProfilePage/ProfilePost";


class MessageType{
    static user = "my-message";
    static other = "other-message";
}

class Message {
    // Свойства (переменные)
    _content = '';
    _sender = '';
    _avatarImg = '';
    _timeSended;
    _comments;

    static _defaulAvatarImg = `${process.env.PUBLIC_URL}/img/profileIcon.webp`;

    // Конструктор (инициализация объекта)
    constructor(content, sender = MessageType.user, timeSended = null, avatarImg = `${process.env.PUBLIC_URL}/img/profileIcon.webp`, comments = []) {
        this._content = content;
        if (avatarImg === "") avatarImg = `${process.env.PUBLIC_URL}/img/profileIcon.webp`;
        this._avatarImg = avatarImg;
        this._comments = comments;
        this._sender = sender;
        this._timeSended = timeSended;
    }


    get content() { // Геттер
        return this._content;
    }

    set content(value) { // Сеттер
        this._content = value;
    }

    get avatarImg() { // Геттер
        return this._avatarImg;
    }

    set avatarImg(value) { // Сеттер
        this._avatarImg = value;
    }

    get comments() { // Геттер
        return this._comments;
    }

    set comments(value) { // Сеттер
        this._comments = value;
    }

    get type() { // Геттер
        return this._sender;
    }

    set type(value) { // Сеттер
        this._sender = value;
    }

    get timeSended() { // Геттер
        return this._timeSended;
    }

    set timeSended(value) { // Сеттер
        this._timeSended = value;
    }



    // Методы (функции)
    sendMessage() {
        console.log('Метод send message');
    }

    createMessageLi(index) {
        let sender = this._sender;
        if (!this._sender) sender = "user";
        //`${process.env.PUBLIC_URL}/img/profileIcon.webp`
        return (
            <PostItemComponent key={index} text={this._content} avatarImg={this._avatarImg} sender={sender} timeSended={this._timeSended}/>
        );
    }

    static createMessages(contentList, typesList = Array(contentList.length).fill(""), avatarList = Array(contentList.length).fill(""), ) {
        if (contentList.length !== avatarList.length) {
            console.error("Ошибки в данных:  Количество сообщений и аватаров не совпадает");
            return [];
        }

        // Создание массива объектов Message
        const messages = contentList.map((content, index) => {
            return new Message(content, typesList[index], avatarList[index]);
        });
        return messages;
    }
}

export default Message;