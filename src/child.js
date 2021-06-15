import React, { Component } from 'react';
import './App.css';


class Child extends Component {
  

  constructor(){
    super();
    
    console.log('Child constructor');
  }
  componentWillMount(){
    
    console.log('Child componentWillMount')
  }
  componentDidMount(){
    console.log('Child componentDidMount')
  }
  componentWillReceiveProps(){
    console.log('Child componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("Child shouldComponentUpdate")
    return true
  }
  componentWillUpdate(){
    console.log('Child componentWillUpdate')
  }
  componentDidUpdate(prevPros,prevState){
    console.log('prevProps',prevPros)
    console.log('prevState',prevState)
    console.log('Child componentDidUpdate')
  }
  componentWillUnmount(){
    console.log("Child componentWillUnmount")
  }
  render(){
    console.log('ChildRender')
    return(
      <div className="App">
       lastName: {this.props.name};
      </div>
    );
  }
}
export default Child;
