import axios from "axios";
import React, { useState } from "react";
import Weather from "./weather";

function Api() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState();

  const searchCity = async () => {
    setLoading(true)
    const url1 =
      "https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json";

    const {data} = await axios.get(url1)
    setData(data);
    setLoading(false)
  };

  if (!loading && !data.length) searchCity()

 
  const [filter, setFilter] = useState([]);
  function HandleFilter(event) {
    const Word = event.target.value;
    const newWord = data.filter((value) => {
      return value.name.includes(Word);
    });
    setFilter(newWord);
  }

  return (
    <div className="weather">
      <h1>{selectedCity}</h1>
      <input
        className="input"
        type="text"
        placeholder="עיר"
        onChange={HandleFilter}
      />
      <div className="search">
        {filter.map((value) => {
          return <div className="list" onClick={() => setSelectedCity(value.name)}>{value.name}</div>;
        })}
        {HandleFilter}
      </div>
      <div />

      <Weather selectedCity={selectedCity}/>
      {loading? <span>loading please wait...</span>: ''}
    </div>
  );
}

export default Api;