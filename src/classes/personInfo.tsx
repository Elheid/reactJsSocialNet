/*import LiProfileComponent from "../components/ProfilePage/Header/ProfileInfoLi";
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


 

export default PersonInfo;*/
 /*
  Для добавления новой инфы
  Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
  });
  */

  import { JSX } from "react";
import LiProfileComponent from "../components/ProfilePage/Header/ProfileInfoLi";
import { camelCaseToTitleCase } from "../util";

// Интерфейс для элемента списка, используемого в initInfoByList
interface InfoItem {
    infoType: string;
    content: string;
}
/**
 * Represents personal information for a user profile
 * @class
 * @property {string} name - The person's name
 * @property {string} birthDate - The person's birth date
 * @property {string} city - The person's city
 * @property {string} phoneNumber - The person's phone number
 * @property {string} emailAddress - The person's email address
 * @property {string} description - The person's description
 */
class PersonInfo {
    // Приватные свойства
    #name: string = "";
    #birthDate: string = "";
    #city: string = "";
    #phoneNumber: string = "";
    #emailAddress: string = "";
    #description: string = "";

    // Геттеры и сеттеры
    get name(): string {
        return this.#name;
    }

    set name(value: string) {
        this.#name = value;
    }

    get birthDate(): string {
        return this.#birthDate;
    }

    set birthDate(value: string) {
        this.#birthDate = value;
    }

    get city(): string {
        return this.#city;
    }

    set city(value: string) {
        this.#city = value;
    }

    get phoneNumber(): string {
        return this.#phoneNumber;
    }

    set phoneNumber(value: string) {
        this.#phoneNumber = value;
    }

    get emailAddress(): string {
        return this.#emailAddress;
    }

    set emailAddress(value: string) {
        this.#emailAddress = value;
    }

    get description(): string {
        return this.#description;
    }

    set description(value: string) {
        this.#description = value;
    }

    // Инициализация через параметры
    initInfoByParam(
        name: string,
        birthDate: string,
        city: string,
        phoneNumber: string,
        emailAddress: string,
        description: string
    ): void {
        this.#name = name;
        this.#birthDate = birthDate;
        this.#city = city;
        this.#phoneNumber = phoneNumber;
        this.#emailAddress = emailAddress;
        this.#description = description;
    }

    // Инициализация через список объектов
    initInfoByList(list: InfoItem[]): void {
        list.forEach((item) => {
            switch (item.infoType) {
                case "name":
                    this.#name = item.content;
                    break;
                case "birth-date":
                    this.#birthDate = item.content;
                    break;
                case "city-name":
                    this.#city = item.content;
                    break;
                case "phone-number":
                    this.#phoneNumber = item.content;
                    break;
                case "email":
                    this.#emailAddress = item.content;
                    break;
                case "description":
                    this.#description = item.content;
                    break;
                default:
                    console.warn("Неизвестный тип информации: ", item.infoType);
                    break;
            }
        });
    }

    // Конструктор
    /**
   * Initializes properties from individual values
   * @method
   * @param {string} name - The person's name
   * @param {string} birthDate - The person's birth date
   * @param {string} city - The person's city
   * @param {string} phoneNumber - The person's phone number
   * @param {string} emailAddress - The person's email address
   * @param {string} description - The person's description
   */
    constructor(...args: [string, string, string, string, string, string] | [InfoItem[]]) {
      if (args.length === 6) {
          this.initInfoByParam(...args as [string, string, string, string, string, string]);
      } else if (args.length === 1 && Array.isArray(args[0])) {
          this.initInfoByList(args[0]);
      } else {
          throw new Error("Invalid constructor arguments");
      }
  }


  /*getPrivateFieldNames() : string[]{
    return ['name', 'birthDate', 'city', 'phoneNumber', 'emailAddress', 'description'];
    }*/

    /**
   * Creates React components for displaying the personal information
   * @method
   * @description // Получение всех свойств
   */
    getAllProperty(): string[] {
      //console.log(Object.getOwnPropertyNames(this))
        /*return Object.getOwnPropertyNames(this)
            .filter((key) => key.startsWith("#"))
            .map((key) => key.replace("#", ""));*/

      //return this.getPrivateFieldNames();

        const proto = Object.getPrototypeOf(this);
        const descriptors = Object.getOwnPropertyDescriptors(proto);
        const fields: string[] = [];
        for (const [prop, descriptor] of Object.entries(descriptors)) {
            if (typeof descriptor.get === 'function' && typeof descriptor.set === 'function') {
                fields.push(prop);
            }
        }
        return fields;
    }


  /**
   * Creates React components for displaying the personal information
   * @method
   * @description Получение имен свойств в формате Title Case
   */
    getKeyNames(): string[] {
        return this.getAllProperty()
            .map((key) => camelCaseToTitleCase(key));
    }

    // Создание компонентов для отображения информации
    /**
   * Creates React components for displaying the personal information
   * @method
   * @returns {JSX.Element[]} Array of list item components
   */
    createInfoComponents(): JSX.Element[] {
        const keyNames = this.getKeyNames();
        const properties = this.getAllProperty();
        const listOfPages = properties.map((property, index) => {
            const keyName = keyNames[index];
            const infoType = property;
            const content = this[property as keyof PersonInfo] as string; // Доступ к приватному свойству
            return (
                <LiProfileComponent
                    key={index}
                    name={keyName}
                    infoType={infoType}
                    content={content}
                />
            );
        });

        return listOfPages;
    }
}

export default PersonInfo;