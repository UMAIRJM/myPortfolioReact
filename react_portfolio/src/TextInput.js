//import React, {useState} from 'react';


function TextInput({inputValue,setInputValue,random,setRand,items,setItems}){

  //  const [inputValue,setInputValue] = useState('');
    
    function handleChange(text){
        setInputValue(text.target.value);
        setRand(12);
        console.log(inputValue)
    }


    function buttonHandler(){
        console.log("entered text is " + inputValue);
        setItems([...items,inputValue])
    }

    return(
        <div>
        <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='Type a number'
        />
        <button type='button' onClick={buttonHandler}>Enter</button>
        
        </div>
    );
}


export default TextInput;