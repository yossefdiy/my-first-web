import axios from "axios";
import React, { useState } from "react";

function Weather(props) {
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.selectedCity}&units=metric&appid=8fbf66d40976db983740788788eabe97`;
  const searchCity = () => {
      axios.get(url).then((response) => {
        
        setData(response.data);
      });
  };
  if (props.selectedCity && !data.name) {
    searchCity()
  }
  if (data.name)searchCity()


  return (
    <div className="weather">
      <div>
        <div className="data">
          <p>מדינה</p>
          {data.sys ? <p>{data.sys.country} </p> : null}
          <p>עיר</p>
          {data ? <p>{data.name}</p> : null}
          <p>טמפרטורה</p>
          {data.main ? (
            <p>
              {" "}
              <p>°C</p> {Math.round(data.main.temp)}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Weather