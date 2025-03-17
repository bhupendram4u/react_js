import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

function App() {
  const data={
    "india":[{
        "maharashtra":["Mumbai","Pune","Nashik"],
        "delhi":["New Delhi","Gurgaon","Faridabad"],
        "gujarat":["Ahmedabad","Surat","Vadodara"]

    }],
    "america":[{
        "california":["Los Angeles","San Francisco","San Diego"],
        "newyork":["New York","Buffalo","Albany"],
        "texas":["Austin","Dallas","Houston"]

    }],
    "australia":[{
        "new south wales":["Sydney","Melbourne","Brisbane"],
    }]
  }
  const [countryState,SetCountryState]=useState([]);
  const [cityState,SetCityState]=useState("");  
  const [cityList,SetCityList]=useState("");  
  const [stateList,SetStateList]=useState([]);
  

  const handleCountryChange=(e)=>{
    SetCountryState(e.target.value);
    SetStateList(data[e.target.value]);
  }
  const handleStateChange=(e)=>{
    SetCityState(e.target.value);
    SetCityList(data[countryState][e.target.value]);
  }

  return (
    <div className="App">
       <select onChange={handleCountryChange}>
          {Object.keys(data).map((country)=>(<option key={country}>{country}</option>))}  
        </select>
    
     
    </div>
  );
}

export default App;
