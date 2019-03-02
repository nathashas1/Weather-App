import React from 'react';
const Weather = (props) => {
  if (props.error) {
    return(
      <div>{props.error}</div>
    )
  } else {
  return(
       <div>
          {props.city && <p>City: {props.city}</p>}
          {props.maxtemp && <p>Maximum Temperature: {props.maxtemp}</p>}
          {props.mintemp && <p>Minimum Temperature: {props.mintemp}</p>}
          {props.humidity && <p>Humidity: {props.humidity}</p>}
          {props.weatherstateabbr && <p>Weather State: {props.weatherstateabbr}</p>}
          {props.windspeed && <p>Wind Speed: {props.windspeed}</p>}
          {props.predictability && <p>Predictability: {props.predictability}</p>}

       </div>
   )}
}
export default Weather;
