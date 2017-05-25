import React,{Component} from 'react';
import Search from './Search.js';
import WeatherList from './WeatherList.js';
require("../styles/APP.less")
class APP extends Component{
  render(){
    return(
      <div id="searchWrap">
        <Search/>
        <WeatherList/>
      </div>
    )
  }
}
export default APP
