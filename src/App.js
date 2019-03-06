import React from 'react';
import Titles from './components/title';
import UserInput from './components/user_input';
import Weather from './components/weather';
// import logo from './logo.svg';
import './App.css';



class App extends React.Component {
    state = {
      city: undefined,
      day: undefined,
      date: undefined,
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
    }

    anotherCity = async(e) => {
      e.preventDefault();
      this.setState({showComponent: true, result: false, city: undefined})
    }

    findDay(date){
      let arr = date.split("-")
      let d = new Date(parseInt(arr[0]),parseInt(arr[1])-1,parseInt(arr[2]))
      let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
      let day = days[d.getDay()]
      return day
    }

    weather = id => async(e) => {
      e.preventDefault();
      let city = this.state.city || e.target.elements.city.value;
      if (city){
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        let targetUrl = `https://www.metaweather.com/api/location/search/?query=${city}`
        const api_call = await fetch(proxyUrl + targetUrl)
        const response = await api_call.json()
        if (response.length > 0){
              const woeid = response[0].woeid
              let targetUrlWoeid = `https://www.metaweather.com/api/location/${woeid}`
              const apiCallWoeid = await fetch(proxyUrl + targetUrlWoeid)
              const responseWoeid = await apiCallWoeid.json()
              const weatherDetails = responseWoeid.consolidated_weather[id]
              const temp = Math.round(weatherDetails.the_temp)
              const minTemp = Math.round(weatherDetails.min_temp)
              const maxTemp = Math.round(weatherDetails.max_temp)
              const windSpeed = Math.round(weatherDetails.wind_speed)
              const day = this.findDay(weatherDetails.applicable_date)
              const date = weatherDetails.applicable_date.split("-")[2]
              this.setState({
                city: responseWoeid.title,
                responseWoeid: responseWoeid.consolidated_weather,
                date: date,
                day: day,
                maxTemp: maxTemp,
                temp: temp,
                minTemp: minTemp,
                humidity: weatherDetails.humidity,
                weatherStateAbbr: weatherDetails.weather_state_abbr,
                windSpeed: windSpeed,
                predictability: weatherDetails.predictability,
                showComponent: false,
                result: true,
                id: weatherDetails.id,
                error: undefined,
            })
          }else{
            this.setState({error: "City does not exist"})
          }
      } else {
        this.setState({error: "Please enter City"})
      }
    }


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
                                      day={this.state.day}
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
