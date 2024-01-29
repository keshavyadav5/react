import style from './ButtonContainer.module.css';

function ButtonContainer({onButtonClick}) {
  let buttonName = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  return (
    <div className={style.buttonContainer}>
      {buttonName.map(item => (<button key={item} className={style.button} onClick={()=>onButtonClick(item)}>{item}</button>))}
    </div>
  );
}

export default ButtonContainer;
