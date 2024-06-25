import { useState } from 'react';
import './TextInput'
import TextInput from './TextInput';
import OutlinedCard from './Card';
import DrawerAppBar from './navigationBar';

function MyComponent(){
    const[inputValue1,setInputValue] = useState('')
    const [rand ,setRand] = useState(0);
    const[items,setItems] = useState([]);
return(
    //Below is the code for basic intro to react passing props etc.
    // <div >
        
    //     <div style={styles.divStyle}>
    //     <div >
    //     <h1 style = {styles.mydesign}>Muhammad Shoaib</h1>
    //     <h5>Hafzi sahb</h5>
    //     </div>
    //     <div>
    //     <h1>Amama Ayub </h1>
    //     <h5>Computer scientist</h5>
    //     </div>

    //     </div>
        
        
    //     <div>
    //      <TextInput inputValue={inputValue1}  setInputValue ={setInputValue} random={rand} setRand={setRand} items={items} setItems={setItems}/>    
    //      <p>Entered Value is :{inputValue1}</p>
    //      <p>I am random: {rand}</p>
         
    //      <ul>
    //      {
    //         items.map( item =>(
    //             <li>{item}</li>
                
    //         ))
    //      }
    //      </ul>
    //     </div>

    // </div>

    <div >
        <div style={styles.divStyle}>
        <OutlinedCard word={'umair'} definition={'he is creative man'} detail={'He is very profound and efficinet software engineer always admire his work'}/>
        <OutlinedCard/>
        <OutlinedCard/>

        </div>
        <div>
            <DrawerAppBar/>
        </div>
        
    </div>
);
}


export default MyComponent;


const styles = {
    mydesign:{
        color:'red',

    },
    divStyle:{
        
        display:'flex',
        flexDirection:'row',
        padding:20,
        alignItem:'center',
        alignSelf:'center',
    }
}