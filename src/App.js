import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state= {
      name:'Manoj'
    }
    console.log('constructor');
  }
  componentWillMount(){
    if(window.innerHeight < 500){
      this.setState({innerHeight:window.innerHeight})
    }
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate")
    return true
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(prevPros,prevState){
    console.log('prevProps',prevPros)
    console.log('prevState',prevState)
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  changeState(){
    this.setState({name:'sai'});
  }
  unmountChild(){
    this.setState({name:'mukesh'})
  }
  render(){
    console.log('Render')
    if(this.state.name==='mukesh'){
      return(<div/>);
    }
    return(
      <div className="App">
        name :{this.state.name}<br/>
        innerHeight : {this.state.innerHeight}
        <Child name={this.state.name}/>
        <button onClick={this.changeState.bind(this)}>changeState</button><br/>
        <button onClick={this.unmountChild.bind(this)}>unmount</button>
      </div>
    );
  }
}

export default App;
