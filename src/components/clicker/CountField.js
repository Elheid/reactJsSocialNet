import { useContext } from "react";
import { ClickerContext } from "./MainClicker";

import classes from './clickerCss/clickerField.module.css'
import classesMain from './clickerCss/mainClicker.module.css'
import classNames from "classnames";

const CountFieldComponent = () => {
    const { count } = useContext(ClickerContext);
    return (
        <div className={classNames(classes["clicker-res-counter"], classesMain["inner-box"], "boxOfContent")}>
            <span className={classNames(classes["result-text"])}>Вы накликали:</span>
            <ScoreComponent count={count}/>
        </div>
    );
}

const ScoreComponent = (param)=>{
    const res = param || param.count > 0 ? param.count: 0;
    return (
        <span className={classes["result-score"]}>{res}</span>
    );
}

export default CountFieldComponent;