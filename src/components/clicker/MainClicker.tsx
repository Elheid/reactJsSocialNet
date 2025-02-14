import { ClickerContextProvider } from "../../contextProviders/MainClickerContext";
import ClickableImgComponent from "./ClickableImg";
import CountFieldComponent from "./CountField";
import classes from './clickerCss/mainClicker.module.css';

export const MainClickerComponent = () => {

    return (
        <ClickerContextProvider>
            <section className={classes["clicker-page"]}>
                <CountFieldComponent />
                <ClickableImgComponent />
            </section>
        </ClickerContextProvider>
    );
};