import React from "react";
import s from "../MainScreen.module.css";

const Buttons = () => {
    return (
        <div className={s.buttons}>
            <button className={s.active}>Now</button>
            <button>Details</button>
            <button>Forecast</button>
        </div>
    )
}

export default Buttons;