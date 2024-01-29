import style from './App.module.css';
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';

function App() {
    let [calVal,setCalVal]=useState("");
    const onButtonClick=(buttonText)=>{
      if(buttonText==='C'){
        setCalVal("");
      }else if(buttonText==='='){
        let result =eval(calVal);
        setCalVal(result);
      }else{
        let newData=calVal + buttonText;
        setCalVal(newData);
      }
    };

  return (
    <div className={style.calculator}>
    <Display displayValue={calVal}/>
    <ButtonContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
