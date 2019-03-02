import React from 'react';
import Titles from './components/title';
import UserInput from './components/user_input';
import Weather from './components/weather';
// import logo from './logo.svg';
// import './App.css';
//


class App extends React.Component {
  state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
  }
    weather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let targetUrl = `https://www.metaweather.com/api/location/search/?query=${city}`
    // const country = e.target.elements.country.value;
    const api_call = await fetch(proxyUrl + targetUrl)
    const response = await api_call.json()
    const woeid = response[0].woeid
    let targetUrlWoeid = `https://www.metaweather.com/api/location/${woeid}`
    const api_call_woeid = await fetch(proxyUrl + targetUrlWoeid)
    const response_woeid = await api_call_woeid.json()
    console.log(response_woeid);
  }

  render() {
    return (
      <div>
        <Titles />
        <UserInput weather={this.weather} />
        <Weather />
      </div>
    );
  }
}

export default App;
