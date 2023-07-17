import React , {useState} from 'react';
import './App.css';


function App() {
  const [result , setResult] = useState("");
  function clickHandler (e){
    setResult (result.concat(e.target.value))
  }
  function cleardisplay (){
    setResult("");
  }
function calculate(){
  setResult(eval(result).toString());
}

  return (
    <div>
      <h1 style={{textAlign:'center' , color:'whitesmoke'}}>CALCULATOR</h1>
    <div className="calc">
      <input type="text" placeholder="0"  id='answer' value={result}/>
      <input type= "button" value="9" className='button' onClick={clickHandler}/>
      <input type= "button" value="8"className='button'onClick={clickHandler}/>
      <input type= "button" value="7"className='button'onClick={clickHandler}/>
      <input type= "button" value="*"className='button'onClick={clickHandler}/>
      <input type= "button" value="6"className='button'onClick={clickHandler}/>
      <input type= "button" value="5"className='button'onClick={clickHandler}/>
      <input type= "button" value="4"className='button'onClick={clickHandler}/>
      <input type= "button" value="/"className='button'onClick={clickHandler}/>
      <input type= "button" value="3"className='button'onClick={clickHandler}/>
      <input type= "button" value="2"className='button'onClick={clickHandler}/>
      <input type= "button" value="1"className='button'onClick={clickHandler}/>
      <input type= "button" value="-"className='button'onClick={clickHandler}/>
      <input type= "button" value="."className='button'onClick={clickHandler}/>
      <input type= "button" value="0"className='button'onClick={clickHandler}/>
      <input type= "button" value="%"className='button'onClick={clickHandler}/>
      <input type= "button" value="+"className='button'onClick={clickHandler}/>
      <input type= "button" value="clear"className='button button1' onClick={cleardisplay}/>
      <input type= "button" value="="className='button button2'onClick={calculate}/>

    
    </div>
    </div>
  );
}

export default App;
