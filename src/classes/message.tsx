import { JSX } from "react";
import PostItemComponent from "../components/ProfilePage/ProfilePost";
import { DEFAULT_AVATAR_IMG, MessageType } from "../constants";


// Интерфейс для комментариев (если они имеют структуру)
interface Comment {
    content: string;
    sender: string;
    timeSended: Date;
}

/**
 * Represents a message in the chat system
 * @class
 * @property {string} content - The message content
 * @property {MessageType} sender - The sender type (user/other)
 * @property {string} avatarImg - URL of the sender's avatar
 * @property {Date | null} timeSended - Timestamp of when the message was sent
 * @property {Comment[]} comments - Array of comments on the message
 */
class Message {

    // Свойства (переменные)
    private _content: string;
    private _sender: MessageType;
    private _avatarImg: string;
    private _timeSended: Date | undefined;
    private _comments: Comment[];

    // Статическое свойство для аватара по умолчанию
    static _defaultAvatarImg: string = DEFAULT_AVATAR_IMG;

    // Конструктор (инициализация объекта)
    /**
     * Creates a new Message instance
     * @constructor
     * @param {string} content - The message content
     * @param {MessageType} [sender=MessageType.User] - The sender type
     * @param {Date | undefined} [timeSended=undefined] - Timestamp of when the message was sent
     * @param {string} [avatarImg=Message._defaultAvatarImg] - URL of the sender's avatar
     * @param {Comment[]} [comments=[]] - Array of comments on the message
     */
    constructor(
        content: string,
        sender: MessageType = MessageType.User,
        timeSended: Date | undefined = undefined,
        avatarImg: string = Message._defaultAvatarImg,
        comments: Comment[] = []
    ) {
        this._content = content;
        this._avatarImg = avatarImg || Message._defaultAvatarImg;
        this._comments = comments;
        this._sender = sender;
        this._timeSended = timeSended;
    }

    // Геттеры и сеттеры
    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get avatarImg(): string {
        return this._avatarImg;
    }

    set avatarImg(value: string) {
        this._avatarImg = value;
    }

    get comments(): Comment[] {
        return this._comments;
    }

    set comments(value: Comment[]) {
        this._comments = value;
    }

    get type(): MessageType {
        return this._sender;
    }

    set type(value: MessageType) {
        this._sender = value;
    }

    get timeSended(): Date | undefined {
        return this._timeSended;
    }

    set timeSended(value: Date | undefined) {
        this._timeSended = value;
    }

    // Методы (функции)
    sendMessage(): void {
        console.log('Метод send message');
    }

    /**
     * Creates a list item element for the message
     * @method
     * @param {number} index - The index of the message
     * @returns {JSX.Element} The message list item component
     */
    createMessageLi(index: number, classesNames?:string): JSX.Element {
        const sender = this._sender || MessageType.User;
        return (
            <PostItemComponent
                classesNames={classesNames}
                key={index}
                content={this._content}
                avatarImg={this._avatarImg}
                sender={sender}
                timeSended={this._timeSended}
            />
        );
    }

    // Статический метод для создания массива сообщений
    /**
     * Creates an array of Message objects from content lists
     * @static
     * @param {string[]} contentList - Array of message contents
     * @param {MessageType[]} [typesList] - Array of sender types
     * @param {string[]} [avatarList] - Array of avatar URLs
     * @returns {Message[]} Array of Message objects
     */
    static createMessages(
        contentList: string[],
        typesList: MessageType[] = Array(contentList.length).fill(MessageType.User),
        avatarList: string[] = Array(contentList.length).fill(Message._defaultAvatarImg)
    ): Message[] {
        if (contentList.length !== avatarList.length) {
            console.error("Ошибки в данных: Количество сообщений и аватаров не совпадает");
            return [];
        }

        // Создание массива объектов Message
        const messages = contentList.map((content, index) => {
            return new Message(content, typesList[index], undefined, avatarList[index]);
        });
        return messages;
    }
}

export default Message;