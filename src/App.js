import React from 'react';
import Titles from './components/title';
import UserInput from './components/user_input';
import Weather from './components/weather';
// import logo from './logo.svg';
// import './App.css';
//
class App extends React.Component {
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


let weather = async() => {
  const api_call = await fetch(`https://www.metaweather.com/api/location/search/?query=san`)
  const response = await api_call.json()
  console.log(response);
}
