// import React, {useState} from 'react';
// import classNames from 'classnames';
// import s from './Buttons.module.css';
//
// const Button = ({id, key, text}) => {
//
//     const [isActive, setIsActive] = useState('1');
//     const handleClick = (event) => {
//         setIsActive(event.target.id);
//     }
//
//     return (
//         <li className={s.btnElem}>
//             <button
//                 id={id}
//                 key={key}
//                 onClick={handleClick}
//                 className={
//                     isActive === {id} ? classNames(s.active,s.button) : classNames(s.button)}
//             >{text}</button>
//         </li>
//     )
// }
//
// export default Button;