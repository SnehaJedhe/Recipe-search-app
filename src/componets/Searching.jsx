import React from 'react'
import '../CSS_files/search.css';
const Searching = ({input ,setInput}) =>{
    
  return (
    <>
    <div className='header'>
        <input type="text" placeholder='search here' value={input} onChange={(e)=>{
            setInput(e.target.value)
            // console.log(input);
        }} 
            />
        {/* <button>Click Me</button> */}
    </div>
    </>
  )
}

export default Searching
