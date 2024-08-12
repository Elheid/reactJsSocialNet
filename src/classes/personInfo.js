import LiProfileComponent from "../components/ProfilePage/Header/ProfileInfoLi";
import { camelCaseToTitleCase } from "../util";

class PersonInfo {
  #name;
  #birthDate;
  #city;
  #phoneNumber;
  #emailAddress;
  #description;
  get name() { // Геттер
    return this.#name;
  }

  set name(value) { // Сеттер
    this.#name = value;
  }

  get birthDate() { // Геттер
    return this.#birthDate;
  }

  set birthDate(value) { // Сеттер
    this.#birthDate = value;
  }

  get city() { // Геттер
    return this.#city;
  }

  set city(value) { // Сеттер
    this.#city = value;
  }

  get phoneNumber() { // Геттер
    return this.#phoneNumber;
  }

  set phoneNumber(value) { // Сеттер
    this.#phoneNumber = value;
  }

  get emailAddress() { // Геттер
    return this.#emailAddress;
  }

  set emailAddress(value) { // Сеттер
    this.#emailAddress = value;
  }

  get description() { // Геттер
    return this.#description;
  }

  set description(value) { // Сеттер
    this.#description = value;
  }

  initInfoByParam(name, birth, city, phone, email, description){
    this.#name = name
    this.#birthDate = birth;
    this.#city = city;
    this.#phoneNumber = phone;
    this.#emailAddress = email;
    this.description = description;
  }


  initInfoByList(list){
    list.forEach(item => {
      switch (item.infoType) {
        case 'name':
          this.#name = item.content;
          break;
        case 'birth-date':
          this.#birthDate = item.content;
          break;
        case 'city-name':
          this.#city = item.content;
          break;
        case 'phone-number':
          this.#phoneNumber = item.content;
          break;
        case 'email':
          this.#emailAddress = item.content;
          break;
        case 'description':
          this.#description = item.content;
          break;
        default:
          console.warn('Неизвестный тип информации: ', item.infoType);
          break;
      }
    });
  }

  constructor(...args) {
    if (args.length === 6) {
      // Инициализация из отдельных значений
      const [name, birthDate, city, phoneNumber, emailAddress, description] = args;
      this.initInfoByParam(name, birthDate, city, phoneNumber, emailAddress, description);
      /*this.#name = name;
      this.#birthDate = birthDate;
      this.#city = city;
      this.#phoneNumber = phoneNumber;
      this.#emailAddress = emailAddress;*/
    } else if (args.length === 1 && Array.isArray(args[0])) {
      // Инициализация из массива объектов
      const classNamesList = args[0];
      this.initInfoByList(classNamesList);
    } else {
      throw new Error("Неверные аргументы конструктора");
    }
  }

  getAllProperty() {
    return Object.getOwnPropertyNames(this)
      .map(key => key.replace(/__private_\d+_/, ''));
  }

  
  getKeyNames() {
    return this.getAllProperty()
      .map(key => {
          return camelCaseToTitleCase(key);
      });
  }

  createInfoComponents() {
    const keyNames = this.getKeyNames();
    const properties = this.getAllProperty();
    const listOfPages = properties.map((property, index) => {
      const keyName = keyNames[index];
      const infoType = property; // Преобразуем имя в lowerCase
      const content = this[infoType]; // Доступ к свойству по имени
      const li = (
        <LiProfileComponent
          key={index}
          name={keyName}
          infoType={infoType}
          content={content}
        />
      );
      return li;
    });

    return listOfPages;
  }
}

  /*
  Для добавления новой инфы
  Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
  });
  */
 

export default PersonInfo;