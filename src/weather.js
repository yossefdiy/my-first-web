import axios from "axios";
import React, {useState} from "react";

function Weather(props) {
  const [data, setData] = useState([]);
//  const url= ` https://api.weatherapi.com/v1/current.json?&q=${props.selectedCity}&key=85c6feb190f54ccfaa2174304221407&aqi=no`
 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.selectedCity}&units=metric&appid=8fbf66d40976db983740788788eabe97`;


  const searchCity1 = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      

})};


if (!data.sys && props.selectedCity) {
searchCity1()
}



const Clear =()=>{
  if (data.sys && props.selectedCity)
  { searchCity1()}
}




  return (
    <div className="weather">
          
       <button onClick={()=> Clear()}  > שנה עיר</button>
     
      <div>
     
        <div className="data">
        {data.sys? <p className="state">{data.sys.country} </p> : null}
       {data ? <p className="city">{data.name}</p> : null}
      {data.main ? <p className="tmp">{Math.round(data.main.temp)} °C </p>:null}
               
        </div>
      </div>
   

    </div>
  );
}

export default Weather