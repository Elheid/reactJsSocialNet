import { createContext, useState } from "react";
import ClickableImgComponent from "./ClickableImg";
import CountFieldComponent from "./CountField";

import { getRandomIntInRange } from '../../util';

import classes from './clickerCss/mainClicker.module.css';

const ClickerContext = createContext();

const addPlusOneOnScreen = (obj) => {
  const button = obj.parentElement;
  if (!button.querySelector(".plus-one")) {
    const plusOne = document.createElement('span');
    plusOne.classList.add('plus-one');
    plusOne.textContent = '+1';
    button.appendChild(plusOne);
  }
  let plusOne = button.querySelector(".plus-one");
  plusOne.style.left = `${getRandomIntInRange(45, 55)}%`;
  plusOne.style.top = `${getRandomIntInRange(45, 55)}%`;
  plusOne.classList.add('show');

  setTimeout(() => {
    plusOne.classList.remove('show');
  }, 300);
}

const MainClickerComponent = () => {
    const [count, setCount] = useState(0);
    const handleClick = (event) => {
      setCount(count + 1);
      addPlusOneOnScreen(event.target)
    }

    return (
        <ClickerContext.Provider value={{ count, handleClick }}>
        <section className={classes["clicker-page"]}>
        <CountFieldComponent />
        <ClickableImgComponent />
        </section>
        </ClickerContext.Provider>
    );
}

export {MainClickerComponent, ClickerContext};