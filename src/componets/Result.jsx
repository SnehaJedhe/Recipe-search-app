import React from 'react'
import '../CSS_files/result.css';
const Result = ({data,setData}) => {
  return (
    <>
    <div className='main-div'>
        {/* {console.log(data) */
       data.map((ele)=>{
        console.log(ele.recipe);
        return(
            <div className='card'>
                <img src={ele.recipe.image}/> 
                <p>Calories : {parseInt(ele.recipe.calories)}</p>
                {/* <h3>{ele.recipe.mealType}</h3> */}
                <h1>{ele.recipe.label}</h1>
               <div className='order'> 
                <ol>
                            {ele.recipe.ingredientLines.map((ele1,index )=> {
                                if(index<=4){
                                    return <li>{ele1}</li>
                                }
                                
                            })}
                        </ol>
                </div>
                </div>
        )
       })
        
        
        }

    </div>
    </>
  )
}

export default Result