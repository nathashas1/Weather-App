import React from 'react';
const Weather = (props) => {
  let className = `background-result-${props.weatherStateAbbr}`;
  return(
    <div className="result-container">
        {props.city && <div className="header"><strong style={{ paddingRight: '20px',fontSize: '35px'}}>{props.city}</strong> <strong style={{paddingRight: '20px',fontSize: '35px'}}>{props.temp}ºC</strong><div className={className}></div></div>}
      <div className="weather">
         <table>
            {props.city && <tbody><tr><th>City</th><td>{props.city}</td></tr></tbody>}
            {props.maxTemp && <tbody><tr><th>Maximum Temperature</th><td>{props.maxTemp}º</td></tr></tbody>}
            {props.minTemp && <tbody><tr><th>Minimum Temperature</th><td>{props.minTemp}º</td></tr></tbody>}
            {props.humidity && <tbody><tr><th>Humidity</th><td>{props.humidity}%</td></tr></tbody>}
            {props.weatherStateAbbr && <tbody><tr><th>Weather State</th><td>{props.weatherStateAbbr}</td></tr></tbody>}
            {props.windSpeed && <tbody><tr><th>Wind Speed</th><td>{props.windSpeed}mph</td></tr></tbody>}
            {props.predictability && <tbody><tr><th>Predictability</th><td>{props.predictability}%</td></tr></tbody>}
         </table>
       </div>
        {props.city && <button className="submit2" onClick={props.anotherCity}>Find another City</button>}
    </div>
   )
}
export default Weather;
