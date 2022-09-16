import React, {useState} from "react";
import s from './Buttons.module.css';
import classNames from 'classnames';

const ButtonsList = () => {

    const [isActive, setIsActive] = useState('1');

    const handleClick = (event) => {
        setIsActive(event.target.id);
    }

    return (
        <div className={s.buttonsBlock}>
            <button key={1} id={'1'} onClick={handleClick} className={isActive === '1'
                ? classNames(s.active,s.button) : classNames(s.button)}>Now</button>
            <button key={2} id={'2'} onClick={handleClick} className={isActive === '2'
                ? classNames(s.active,s.button) : classNames(s.button)}>Details</button>
            <button key={3} id={'3'} onClick={handleClick} className={isActive === '3'
                ? classNames(s.active,s.button) : classNames(s.button)}>Forecast</button>
        </div>
    )
}

export default ButtonsList;