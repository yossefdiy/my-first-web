import axios from "axios";
import React  from "react";


export default function Api() {

const [post, setPost] = React.useState({});
const [city,setCity] = React.useState('')


const url=`http://api.weatherapi.com/v1/current.json?q=${city}key=2c5a6a0df35146feaa7171556221406&q`
// const url=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8fbf66d40976db983740788788eabe97`

// const url =`https://api.weatherapi.com/v1/current.json?key=2c5a6a0df35146feaa7171556221406&q=london=${city}}`

  
    const searchLocation=(event)=>{

      const useValue = (event.target.value);
    if (event.key ==='Enter'){
    setCity(useValue)
    console.log(useValue);

  
  }    
  }

  React.useEffect(() => {

    axios.get(url).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });  
  },[]);

  if (!post)   return null;

  return (

    <div >
      
      <div className="search">
      <input
      value={city}
       
       onChange={event=>setCity(event.target.value)}
        onKeyDown= {searchLocation}
        />
        </div>

 
      <h1 className="api">{post.name} </h1>
      {/* {post.country} */}
      {/* <p>  טמפרטורה--  {post.current.temp_c}</p>  */}
      {/* <p>last updata:{post.current.last_updated}</p> */}
     

    </div>
      );
}