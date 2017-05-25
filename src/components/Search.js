import React,{Component} from 'react';
import City from './City.js';
require("../styles/Search.less");
class Search extends Component{
  // constructor(){
  //   super()
  //   this.state={
  //     citys:[]
  //   }
  // }
  handClick() {
    let textInput = this.input.value;
    this.props.onhandSubmit(textInput);
    this.input.value="";
  }
  handDelete(index){
    this.props.onhandDelete(index);
  }
  itemClick(text){
    // console.log(text);
    this.props.onhandClick(text);
  }
  render(){
    return (
      <div>
        <input ref={val => {this.input = val}}></input>
        <button onClick={this.handClick.bind(this)}>搜索</button>
        <div>
          {this.props.citys.map((city,i)=>
            <City key={i} city={city} index={i}
            handDelete={this.handDelete.bind(this)}
            handClick={this.itemClick.bind(this)}/>
            )
          }
        </div>
      </div>
    )
  }
}
export default Search
