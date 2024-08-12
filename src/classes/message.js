import PostItemComponent from "../components/ProfilePage/ProfilePost";


class Message {
    // Свойства (переменные)
    _content = '';
    _avatarImg = '';
    _comments;

    static _defaulAvatarImg = `${process.env.PUBLIC_URL}/img/profileIcon.webp`;

    // Конструктор (инициализация объекта)
    constructor(content, avatarImg = `${process.env.PUBLIC_URL}/img/profileIcon.webp`, comments = []) {
        this._content = content;
        if (avatarImg === "") avatarImg = `${process.env.PUBLIC_URL}/img/profileIcon.webp`;
        this._avatarImg = avatarImg;
        this._comments = comments;
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

    // Методы (функции)
    sendMessage() {
        console.log('Метод send message');
    }

    createMessageLi(index, sender = "user") {
        //`${process.env.PUBLIC_URL}/img/profileIcon.webp`
        return (
            <PostItemComponent key={index} text={this._content} avatarImg={this._avatarImg} sender={sender} />
        );
    }

    static createMessages(contentList, avatarList = Array(contentList.length).fill("")) {
        if (contentList.length !== avatarList.length) {
            console.error("Ошибки в данных:  Количество сообщений и аватаров не совпадает");
            return [];
        }

        // Создание массива объектов Message
        const messages = contentList.map((content, index) => {
            return new Message(content, avatarList[index]);
        });
        return messages;
    }
}

export default Message;