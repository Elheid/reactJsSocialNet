import { useCallback } from "react";
import { useClicker } from "../contextProviders/MainClickerContext";
import { getRandomIntInRange } from "../util";

const addPlusOneOnScreen = (element: HTMLElement) => {
    const button = element.parentElement;
    if (!button) return;

    let plusOne = button.querySelector<HTMLSpanElement>(".plus-one");
    if (!plusOne) {
        plusOne = document.createElement('span');
        plusOne.classList.add('plus-one');
        plusOne.textContent = '+1';
        button.appendChild(plusOne);
    }

    plusOne.style.left = `${getRandomIntInRange(45, 55)}%`;
    plusOne.style.top = `${getRandomIntInRange(45, 55)}%`;
    plusOne.classList.add('show');

    setTimeout(() => {
        plusOne.classList.remove('show');
    }, 300);
};

export const useClick = () => {
    const { count, setCount } = useClicker();

    const handleClick = useCallback((event: React.MouseEvent) => {
        setCount(prev => prev + 1);
        addPlusOneOnScreen(event.target as HTMLElement);
    }, []);

    return { count, handleClick };
};