import React from 'react';
import Titles from './components/title';
import UserInput from './components/user_input';
import Weather from './components/weather';
// import logo from './logo.svg';
// import './App.css';
//


class App extends React.Component {
    state = {
      city: undefined,
      max_temp: undefined,
      min_temp: undefined,
      humidity: undefined,
      weather_state_abbr: undefined,
      wind_speed: undefined,
      predictability: undefined,
      error: undefined
    }
    weather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    // console.log(response_woeid);
    if (city){
      let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      let targetUrl = `https://www.metaweather.com/api/location/search/?query=${city}`
      const api_call = await fetch(proxyUrl + targetUrl)
      const response = await api_call.json()
      if (response.length > 0){
        const woeid = response[0].woeid
        let targetUrlWoeid = `https://www.metaweather.com/api/location/${woeid}`
        const api_call_woeid = await fetch(proxyUrl + targetUrlWoeid)
        const response_woeid = await api_call_woeid.json()
        const weather_details = response_woeid.consolidated_weather[0]
        this.setState({
          city: response_woeid.title,
          max_temp: weather_details.max_temp,
          min_temp: weather_details.min_temp,
          humidity: weather_details.humidity,
          weather_state_abbr: weather_details.weather_state_abbr,
          wind_speed: weather_details.wind_speed,
          predictability: weather_details.predictability,
          error: undefined
        })
      } else { 
        this.setState({error: "City does not exist"})
      }

    } else {
    this.setState({error: "Please enter City"})
    }

  }

  render() {
    return (
      <div>
        <Titles />
        <UserInput weather={this.weather} />
        <Weather city={this.state.city}
                 maxtemp={this.state.max_temp}
                 mintemp={this.state.min_temp}
                 humidity={this.state.humidity}
                 weatherstateabbr={this.state.weather_state_abbr}
                 windspeed={this.state.wind_speed}
                 predictability={this.state.predictability}
                 error={this.state.error}

          />
      </div>
    );
  }
}

export default App;
