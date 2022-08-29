import React from "react";
import s from './App.module.css';
import Input from "./Components/Input/Input";
import MainScreen from "./Components/MainScreen/MainScreen";
import {useSelector} from "react-redux";

const App = () => {

    const favCities = useSelector((store) => store.favCities.favCities)

  return (
    <div className={s.container}>
      <Input />
      <MainScreen favCities={favCities} />
    </div>
  );
}

export default App;
