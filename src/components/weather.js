import React from 'react';

const Weather = (props) => {
  let iconMap = {sn: "far fa-snowflake",lr:"fas fa-cloud-rain",hr:"fas fa-cloud-showers-heavy",hc:"fas fa-cloud",lc:"fas fa-cloud",h:"fas fa-cloud-meatball",s:"fas fa-cloud-showers-heavy",sl:"fas fa-cloud-meatball",t:"fas fa-bolt",c:"far fa-sun"}
  let weatherState = {sn: "Snow",lr:"Light rain",hr:"Heavy rain",hc:"Heavy Cloud",lc:"Light Cloud",h:"Hail",s:"Showers",sl:"Sleet",t:"Thunder Storm",c:"Clear Sky"}
  return(
    <div className="result-container">
        <div className="weather">
            <h1 style={{fontSize: '35px', color: '#FFFFFF'}}>Weekly Forecast</h1>
            <table style={{backgroundColor: '#FFFFFF', color: '	#000000'}}>
                <tbody><tr><td><button className="btn" onClick={props.weather(0)}>Today</button></td><td><span className="btn"><i className={iconMap[props.responseWoeid[0].weather_state_abbr]} /></span></td></tr></tbody>
                <tbody><tr><td><button className="btn" onClick={props.weather(1)}>{props.oneDay}</button></td><td><span className="btn"><i className={iconMap[props.responseWoeid[1].weather_state_abbr]} /></span></td></tr></tbody>
                <tbody><tr><td><button className="btn" onClick={props.weather(2)}>{props.twoDay}</button></td><td><span className="btn"><i className={iconMap[props.responseWoeid[2].weather_state_abbr]} /></span></td></tr></tbody>
                <tbody><tr><td><button className="btn" onClick={props.weather(3)}>{props.threeDay}</button></td><td><span className="btn"><i className={iconMap[props.responseWoeid[3].weather_state_abbr]} /></span></td></tr></tbody>
                <tbody><tr><td><button className="btn" onClick={props.weather(4)}>{props.fourDay}</button></td><td><span className="btn"><i className={iconMap[props.responseWoeid[4].weather_state_abbr]} /></span></td></tr></tbody>
                <tbody><tr><td><button className="btn" onClick={props.weather(5)}>{props.fiveDay}</button></td><td><span className="btn"><i className={iconMap[props.responseWoeid[5].weather_state_abbr]} /></span></td></tr></tbody>
            </table>
        </div>


        <div className="weather">
            {props.city && <h1 className="header"><strong style={{ paddingRight: '20px',fontSize: '35px', color: '#FFFFFF'}}>{props.city}</strong> <strong style={{paddingRight: '20px',fontSize: '35px',color: '#FFFFFF'}}>{props.temp}ºC</strong><span className="btn" style={{paddingTop:'10px'}}><i className={iconMap[props.weatherStateAbbr]} /></span></h1>}
             <table style={{backgroundColor: '#FFFFFF', color: '	#000000'}}>
                {props.date && <tbody><tr><th>Day</th><td>{props.day} {props.date}</td></tr></tbody>}
                {props.minTemp && <tbody><tr><th>Low</th><td>{props.minTemp}º</td></tr></tbody>}
                {props.maxTemp && <tbody><tr><th>High</th><td>{props.maxTemp}º</td></tr></tbody>}
                {props.humidity && <tbody><tr><th>Humidity</th><td>{props.humidity}%</td></tr></tbody>}
                {props.weatherStateAbbr && <tbody><tr><th>Weather State</th><td>{weatherState[props.weatherStateAbbr]}</td></tr></tbody>}
                {props.windSpeed && <tbody><tr><th>Wind Speed</th><td>{props.windSpeed}mph</td></tr></tbody>}
                {props.predictability && <tbody><tr><th>Predictability</th><td>{props.predictability}%</td></tr></tbody>}
             </table>
           {props.city && <button className="submit2" onClick={props.anotherCity}>Find another City</button>}
          </div>
    </div>
   )
}
export default Weather;
