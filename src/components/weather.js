import React from 'react';


const Weather = (props) => {
  let image = `weather-${props.weatherStateAbbr}`;
  return(
    <div className="result-container">
      <div className="oneSide">
        <h1>Weekly Forecast</h1>
        <table style={{backgroundColor: '#FFFFFF', color: '	#000000'}}>
          <tr><td><button className="btn" onClick={props.weather(0)}>Today</button></td><td><div className={`weather-${props.responseWoeid[0].weather_state_abbr}`}></div></td></tr>
          <tr><td><button className="btn" onClick={props.weather(1)}>{props.oneDay}</button></td><td><div className={`weather-${props.responseWoeid[1].weather_state_abbr}`}></div></td></tr>
          <tr><td><button className="btn" onClick={props.weather(2)}>{props.twoDay}</button></td><td><div className={`weather-${props.responseWoeid[2].weather_state_abbr}`}></div></td></tr>
          <tr><td><button className="btn" onClick={props.weather(3)}>{props.threeDay}</button></td><td><div className={`weather-${props.responseWoeid[3].weather_state_abbr}`}></div></td></tr>
          <tr><td><button className="btn" onClick={props.weather(4)}>{props.fourDay}</button></td><td><div className={`weather-${props.responseWoeid[4].weather_state_abbr}`}></div></td></tr>
          <tr><td><button className="btn" onClick={props.weather(5)}>{props.fiveDay}</button></td><td><div className={`weather-${props.responseWoeid[5].weather_state_abbr}`}></div></td></tr>
        </table>
      </div>


      <div className="oneSide">
          {props.city && <div className="header"><strong style={{ paddingRight: '20px',fontSize: '35px', color: '#FFFFFF'}}>{props.city}</strong> <strong style={{paddingRight: '20px',fontSize: '35px',color: '#FFFFFF'}}>{props.temp}ºC</strong><div className={image}></div></div>}
          <div className="weather">
           <table>
              {props.city && <tbody><tr><th>City</th><td>{props.city}</td></tr></tbody>}
              {props.date && <tbody><tr><th>Day</th><td>{props.date}</td></tr></tbody>}
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
    </div>
   )
}
export default Weather;
