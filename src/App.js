import React from 'react';
import Titles from './components/title';
import UserInput from './components/user_input';
import Weather from './components/weather';
// import logo from './logo.svg';
import './App.css';
//


class App extends React.Component {
    state = {
      city: undefined,
      maxTemp: undefined,
      minTemp: undefined,
      humidity: undefined,
      weatherStateAbbr: undefined,
      temp:undefined,
      windSpeed: undefined,
      predictability: undefined,
      showComponent: true,
      result: false,
      error: undefined,
      responseWoeid: undefined
      // id: undefined,
      // oneDay:undefined,
      // twoDay:undefined,
      // threeDay:undefined,
      // fourDay:undefined,
      // fiveDay:undefined,
    }

    anotherCity = async(e) => {
      e.preventDefault();
      this.setState({showComponent: true, result: false })
    }

    findDay(date){
      let arr = date.split("-")
      let d = new Date(parseInt(arr[0]),parseInt(arr[1])-1,parseInt(arr[2]))
      let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      let day = days[d.getDay()]
      return day
    }



    weather = id => async(e) => {
    e.preventDefault();
    console.log("i",id)
    let city;
    if (id === 0){
      city = e.target.elements.city.value
    } else {
      city = this.state.city;
    }
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
        console.log("res",response_woeid)
        const weather_details = response_woeid.consolidated_weather[id]
        const temp = Math.round(weather_details.the_temp)
        const minTemp = Math.round(weather_details.min_temp)
        const maxTemp = Math.round(weather_details.max_temp)
        const windSpeed = Math.round(weather_details.wind_speed)
        this.setState({
          city: response_woeid.title,
          responseWoeid: response_woeid.consolidated_weather,
          date: weather_details.applicable_date,
          maxTemp: maxTemp,
          temp: temp,
          minTemp: minTemp,
          humidity: weather_details.humidity,
          weatherStateAbbr: weather_details.weather_state_abbr,
          windSpeed: windSpeed,
          predictability: weather_details.predictability,
          showComponent: false,
          result: true,
          id: weather_details.id,
          error: undefined,
        })
      } else {
        this.setState({error: "City does not exist"})
      }

    } else {
    this.setState({error: "Please enter City"})
    }

  }
  //
  // nextDay = async(e,i) => {
  //   const weather_details = this.state.response_woeid.consolidated_weather[i]
  //   const temp = Math.round(weather_details.the_temp)
  //   const minTemp = Math.round(weather_details.min_temp)
  //   const maxTemp = Math.round(weather_details.max_temp)
  //   const windSpeed = Math.round(weather_details.wind_speed)
  //   e.preventDefault();
  //   this.setState({city: this.state.response_woeid.title,
  //   maxTemp: maxTemp,
  //   temp: temp,
  //   minTemp: minTemp,
  //   humidity: weather_details.humidity,
  //   weatherStateAbbr: weather_details.weather_state_abbr,
  //   windSpeed: windSpeed,
  //   predictability: weather_details.predictability,
  //   showComponent: false,
  //   result: true,
  //   id: weather_details.id,
  //   error: undefined, })
  // }

  render() {
    let className = 'background';
    if (this.state.result) {
      className ='background-result';
    }
    return (
        <div className={className}>
           { this.state.showComponent ? <Titles /> : null }
           { this.state.showComponent ? <UserInput weather={this.weather} /> : null }
           { this.state.result?    <Weather city={this.state.city}
                                    date={this.state.date}
                                    temp={this.state.temp}
                                    maxTemp={this.state.maxTemp}
                                    minTemp={this.state.minTemp}
                                    humidity={this.state.humidity}
                                    weatherStateAbbr={this.state.weatherStateAbbr}
                                    windSpeed={this.state.windSpeed}
                                    predictability={this.state.predictability}
                                    error={this.state.error}
                                    anotherCity={this.anotherCity}
                                    id={this.state.id}
                                    weather={this.weather}
                                    responseWoeid={this.state.responseWoeid}
                                    oneDay={this.findDay(this.state.responseWoeid[1].applicable_date)}
                                    twoDay={this.findDay(this.state.responseWoeid[2].applicable_date)}
                                    threeDay={this.findDay(this.state.responseWoeid[3].applicable_date)}
                                    fourDay={this.findDay(this.state.responseWoeid[4].applicable_date)}
                                    fiveDay={this.findDay(this.state.responseWoeid[5].applicable_date)}
                                    /> : null }
           { this.state.error? <div className="error">{this.state.error}</div> : null }

        </div>
    );
  }
}

export default App;
