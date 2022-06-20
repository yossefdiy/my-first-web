import axios from "axios";
import React,{useState} from "react";

function Weather(){
const [data,setData] = useState({})
const [city,setCity] = useState('')
// const url=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8fbf66d40976db983740788788eabe97`
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8fbf66d40976db983740788788eabe97`
const searchCtiy=(event)=>{
    if (event.key ==='Enter'){
        axios.get(url).then((response)=>{
            setData(response.data)
            console.log(response.data)
     })
    }
}
    
    
        return(
           <div className="weather">

            <div>

            <input className="input"
            type='text'
            value={city}
            placeholder='enter city'
            onChange={event=>setCity(event.target.value)}
            onKeyPress={searchCtiy}
            />
        
         <p>{data.name}</p>
         {data.sys ?<p>{data.sys.country}</p>:null}

       
        {data.main ? <p>{data.main.temp}</p>:null}

        {data.weather ? <p>{data.weather[0].main}</p>:null}

            </div>
           </div> 
        )}
            
        

    
export default Weather