import React from 'react';


const Weather = (props) => {
  const hc = <i className="fas fa-cloud" />
  const lc = <i className="fas fa-cloud" />
  const h = <i className="fas fa-cloud-meatball" />
  const s = <i className="fas fa-cloud-showers-heavy" />
  const sl = <i className="fas fa-cloud-meatball" />
  const t = <i className="fas fa-bolt" />
  const c = <i className="far fa-sun" />
  const sn = <i className="far fa-snowflake" />
  const hr = <i className="fas fa-cloud-showers-heavy" />
  const lr = <i className="fas fa-cloud-rain" />
  return(
    <div className="result-container">
        <div className="weather">
            <h1 style={{fontSize: '35px', color: '#FFFFFF'}}>Weekly Forecast</h1>
            <table style={{backgroundColor: '#FFFFFF', color: '	#000000'}}>
                <tbody><tr><td><button className="btn" onClick={props.weather(0)}>Today</button></td><td><span className="btn">{ eval(props.responseWoeid[0].weather_state_abbr) }</span></td></tr></tbody>
                <tbody><tr><td><button className="btn" onClick={props.weather(1)}>{props.oneDay}</button></td><td><span className="btn">{ eval(props.responseWoeid[1].weather_state_abbr) }</span></td></tr></tbody>
                <tbody><tr><td><button className="btn" onClick={props.weather(2)}>{props.twoDay}</button></td><td><span className="btn">{ eval(props.responseWoeid[2].weather_state_abbr) }</span></td></tr></tbody>
                <tbody><tr><td><button className="btn" onClick={props.weather(3)}>{props.threeDay}</button></td><td><span className="btn">{ eval(props.responseWoeid[3].weather_state_abbr) }</span></td></tr></tbody>
                <tbody><tr><td><button className="btn" onClick={props.weather(4)}>{props.fourDay}</button></td><td><span className="btn">{ eval(props.responseWoeid[4].weather_state_abbr) }</span></td></tr></tbody>
                <tbody><tr><td><button className="btn" onClick={props.weather(5)}>{props.fiveDay}</button></td><td><span className="btn">{ eval(props.responseWoeid[5].weather_state_abbr) }</span></td></tr></tbody>
            </table>
        </div>


        <div className="weather">
            {props.city && <h1 className="header"><strong style={{ paddingRight: '20px',fontSize: '35px', color: '#FFFFFF'}}>{props.city}</strong> <strong style={{paddingRight: '20px',fontSize: '35px',color: '#FFFFFF'}}>{props.temp}ºC</strong><span className="btn" style={{paddingTop:'10px'}}>{ eval(props.weatherStateAbbr) }</span></h1>}
             <table style={{backgroundColor: '#FFFFFF', color: '	#000000'}}>
                {props.city && <tbody><tr><th>City</th><td>{props.city}</td></tr></tbody>}
                {props.date && <tbody><tr><th>Day</th><td>{props.date}</td></tr></tbody>}
                {props.maxTemp && <tbody><tr><th>Maximum Temperature</th><td>{props.maxTemp}º</td></tr></tbody>}
                {props.minTemp && <tbody><tr><th>Minimum Temperature</th><td>{props.minTemp}º</td></tr></tbody>}
                {props.humidity && <tbody><tr><th>Humidity</th><td>{props.humidity}%</td></tr></tbody>}
                {props.weatherStateAbbr && <tbody><tr><th>Weather State</th><td>{props.weatherStateAbbr}</td></tr></tbody>}
                {props.windSpeed && <tbody><tr><th>Wind Speed</th><td>{props.windSpeed}mph</td></tr></tbody>}
                {props.predictability && <tbody><tr><th>Predictability</th><td>{props.predictability}%</td></tr></tbody>}
             </table>
           {props.city && <button className="submit2" onClick={props.anotherCity}>Find another City</button>}
          </div>
    </div>
   )
}
export default Weather;
