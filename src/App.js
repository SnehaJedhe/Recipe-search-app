
import { useState } from 'react';
import './App.css';
import Result from './componets/Result';
import Searching from './componets/Searching';
import { useEffect } from 'react';
function App() {
  const [input ,setInput]=useState("");
  const [data,setData]=useState([])
  useEffect(()=>{
      search()
  },[input])

  
  // console.log(input)
  async function search() {
   
    const api= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=d0d7bc25&app_key=8b2bff8bc01f609505a0f1b701111946`);
      
    const result=await api.json()
    // console.log(result);
      setData(result.hits)
  } 
  return (
    <div className="App">
      <Searching 
      input={input}
      setInput={setInput}

      />
      <Result
      data={data}
      setData={setData}
      />
    </div>
  );
}

export default App;
