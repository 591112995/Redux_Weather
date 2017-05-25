import React,{Component} from 'react';
require("../styles/Weather.less");

class Weather extends Component{
  constructor(){
    super()
    this.state={
      imgSrc:""
    }
  }
  componentWillMount(){
    switch(this.props.data.type){
      case "晴":
        this.setState({imgSrc:"./imgs/1.png"})
      case "多云":
        this.setState({imgSrc:"./imgs/2.png"})
      case "小雨":
        this.setState({imgSrc:"./imgs/3.png"})
      default:
        this.setState({imgSrc:"./imgs/1.png"})
    }
  }
  render(){
    return(
      <li className="weather_wrap">
        <div>{this.props.data.date}</div>
        <img src={this.state.imgSrc} className="weather_img"></img>
        <div>{this.props.data.type}</div>
        <div>{this.props.data.low+"~"+this.props.data.high}</div>
      </li>
    )
  }
}
export default Weather
