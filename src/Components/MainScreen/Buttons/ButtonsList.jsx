import React, {useState} from "react";
import s from './Buttons.module.css';
// import Button from "./Button";
import classNames from 'classnames';

const ButtonsList = () => {

    const [isActive, setIsActive] = useState('1');
    const handleClick = (event) => {
        setIsActive(event.target.id);
    }

    // const buttons = [
    //         {id: '1', key: 1, text: 'Now'},
    //         {id: '2', key: 2, text: 'Details'},
    //         {id: '3', key: 3, text: 'Forecast'}
    // ];
    //
    // const buttonsList = buttons.map(btn => {
    //     return (
    //         <Button
    //             id={btn.id}
    //             key={btn.key}
    //             text={btn.text}
    //         />
    //     )
    // })

    return (
        <ul className={s.buttonsBlock}>
            <button key={1} id={'1'}
                className={
                    isActive === '1' ? classNames(s.active,s.button) : classNames(s.button)}
                onClick={handleClick}>Now</button>
            <button key={2} id={'2'}
                className={isActive === '2' ? classNames(s.active,s.button) : classNames(s.button)}
                onClick={handleClick}>Details</button>
            <button key={3} id={'3'}
                className={isActive === '3' ? classNames(s.active,s.button) : classNames(s.button)}
                onClick={handleClick}>Forecast</button>
            {/*{buttonsList}*/}
        </ul>
    )
}

export default ButtonsList;