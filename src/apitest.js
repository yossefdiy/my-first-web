import axios from "axios";
import React,{useState} from "react";
import Weather from "./weather";



function Api(){
const [data,setData] = useState({})

     

const searchCtiy1=()=>{
    const url1='https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json'
//  const url1='https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.min.json'
//   const url1='https://datahub.io/core/world-cities/r/world-cities.json'
    
        axios.get(url1).then((response)=>{
            setData(response.data)
            console.log(response.data)
     })
    }
    
const [filter,setFilter]= useState([])
function HandelFilter (event){
    const Word = event.target.value 
    const newWord = Object.values (data).filter((value)=>{
        return value.name.includes(Word)
    })
    setFilter(newWord)
}
   
        return(
           <div className="weather">
        
            <input className="input"
            type='text'    
          placeholder='city'
            onChange={HandelFilter}
            onKeyPress={searchCtiy1} 
                />
        <div className="search">
            {Object.values (filter).map((value)=>{
            return <p className="list">{JSON.stringify(value.name)}</p> 
          })}
           {HandelFilter}
           </div>
            <div/>
        
                    
          
      
      
<Weather/>
            </div>
        
        )}
            
        

    
export default Api