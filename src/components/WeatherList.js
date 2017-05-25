import React, {Component} from 'react';
import Weather from './Weather.js';
class WeatherList extends Component {
  render() {
    return (
      <div>
      {
        this.props.weathers.map(weather=>
          weather.details.map((data,i)=>
            {
              // console.log(data)
              return <Weather data={data}/>
            }
          )
        )
      }
      </div>
    )
  }
}
export default WeatherList
{/* <span></span>
{// console.log(this.props.weathers[0]),
this.props.weathers.forEach((weather, i) =>
// <Weather weather={weather.details} key={i}/>
{
  // console.log("component");
  // console.log(weather.details);
  weather.details.forEach((data, i) => {
    console.log(data);
    // return <Weather data={data}/>
    return (
      <div>e</div>
    );
    console.log("wan");
  })
})
} */}
