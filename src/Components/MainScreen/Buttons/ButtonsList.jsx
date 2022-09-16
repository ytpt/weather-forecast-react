import React, {useState} from "react";
import s from './Buttons.module.css';
import classNames from 'classnames';

const ButtonsList = () => {

    const [isActive, setIsActive] = useState('now');

    const handleClick = (event) => {
        setIsActive(event.target.id);
    }

    return (
        <div className={s.buttonsBlock}>
            <button key={1} id={'now'} onClick={handleClick} className={isActive === 'now'
                ? classNames(s.active,s.button) : classNames(s.button)}>Now</button>
            <button key={2} id={'details'} onClick={handleClick} className={isActive === 'details'
                ? classNames(s.active,s.button) : classNames(s.button)}>Details</button>
            <button key={3} id={'forecast'} onClick={handleClick} className={isActive === 'forecast'
                ? classNames(s.active,s.button) : classNames(s.button)}>Forecast</button>
        </div>
    )
}

export default ButtonsList;