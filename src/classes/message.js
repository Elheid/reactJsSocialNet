class Message {
    // Свойства (переменные)
    _content = '';
    _avatarImg = '';
    // Конструктор (инициализация объекта)
    constructor(content, avatarImg) {
        this.content = content;
        this.avatarImg = avatarImg;
    }


    get content() { // Геттер
        return this._content;
    }

    set content(value) { // Сеттер
        this._content = value;
    }

    get avatarImg() { // Геттер
        return this._content;
    }

    set avatarImg(value) { // Сеттер
        this._avatarImg = value;
    }



    // Методы (функции)
    sendMessage() {
        console.log('Метод send message');
    }

    static createMessages(contentList, avatarList){
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