import React, { useRef, useState } from 'react'

const Calculator = () => {

  const inp = useRef(null);
  const [userInput,setUserInput] = useState('');

  const calculateResult = ()=>{
    let result = eval(userInput)
    setUserInput(result);
  }

const handleClick =(e)=>{
  if(e.target.value == '='){
    calculateResult()
  }else if(e.target.value == 'clear'){
    setUserInput('');
  }else if(e.target.value == 'back'){
    setUserInput(userInput.slice(0,-1))
  }else{
    setUserInput(userInput+e.target.value);
  }

}

  const handleChange = (e) => {
  //setUserInput(userInput + e.target.value);
}

const handleKeyDown = (e) =>{
  if(e.altKey){
    e.preventDefault();
  }

  if(!(e.key == 'Control' || e.key == 'Shift' || e.key == 'Alt')){
    if(e.key == 'Enter'){
      calculateResult();
    }else if(e.key == 'Escape'){
      setUserInput('');
    }else if(e.key == 'Backspace'){
      console.log(userInput)
      setUserInput(userInput.toString().slice(0,-1))
    }else{
      setUserInput(userInput + e.key);
    }
  }else{
    inp.current.focus();
  }
}

  return (
    <div className='container'>
        <h2>iClas</h2>
        <div className="input">
            <input type='text' className='userInput' value={userInput} onChange={handleChange} onKeyDown={handleKeyDown} ref={inp}/>
        </div>
        <div className="btn-container">
          <button className='button clear' value="clear" onClick={handleClick}>clear</button>
          <button className='button back' value="back"onClick={handleClick}>back</button>
           <button className='button' value={9} onClick={handleClick}>9</button>
           <button className='button' value={8} onClick={handleClick}>8</button>
           <button className='button' value={7} onClick={handleClick}>7</button>
           <button className='button' value='+' onClick={handleClick}>+</button>
           <button className='button' value={6} onClick={handleClick}>6</button>
           <button className='button' value={5} onClick={handleClick}>5</button>
           <button className='button' value={4} onClick={handleClick}>4</button>
           <button className='button' value='-' onClick={handleClick}>-</button>
           <button className='button' value={3} onClick={handleClick}>3</button>
           <button className='button' value={2} onClick={handleClick}>2</button>
           <button className='button' value={1} onClick={handleClick}>1</button>
           <button className='button' value='*' onClick={handleClick}>*</button>
           <button className='button' value={0} onClick={handleClick}>0</button>
           <button className='button' value='.' onClick={handleClick}>.</button>
           <button className='button' value='=' onClick={handleClick}>=</button>
           <button className='button' value='/' onClick={handleClick}>/</button>
           
        </div>
    </div>
  )
}

export default Calculator