//import logo from './logo.png';
import React from 'react';
//import { Tree } from 'react-tree-graph'
import ReactDOM from 'react-dom';
import './App.css';

let toggleMen = 0;

function count() {
  toggleMen++;
  //console.log(toggleMen); debug line
  ReactDOM.render(<App />, document.getElementById('root'));
}


function App() {
  if (toggleMen % 2 === 0) {
    return (<div className="App">
        <Menu></Menu>
        <Level></Level>
      </div>);
  }
  else 
  {
    return (
      <div className="App">
        <MenuHidden></MenuHidden>
        <Tree></Tree>
      </div>);
  }
  
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: "react"};
  }


  render() {
    //const {showhide} = this.props;
    return (
      <div className="App-Options">
        <div className="Ui-Head">
          <h1 id="Head-Text">Uber Learning</h1>
          <div className="Ui-Menu" onClick={count}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            </div>
          </div>

          <div className="Ui-Menu-Options">
            <a href="https://github.com/Ciaran-06">
            <div className="Ui-Menu-Choice" id="Ui-Menu-Choice-Top">
              <p className="Ui-Menu-Choice-Text">Github</p>
            </div>
            </a>

            <a href="https://www.linkedin.com/in/ciaran-gaffney-581167205/">
            <div className="Ui-Menu-Choice" id="tfbug">
                <p className="Ui-Menu-Choice-Text">Linkdin</p>
            </div>
            </a>

            <div className="Ui-Menu-Choice">
                <p className="Ui-Menu-Choice-Text">Load Level</p>
            </div>
          </div>

          <div className="Ui-Clock">
          <p id="clock">{this.state.date.toLocaleTimeString()}</p>
          <p id="credit">by Ciaran Gaffney</p>
          </div>
        </div>

     ); 
}

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
}

class MenuHidden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: "react"};
  }

  render() {

    return (
      <div className="Hidden-Menu-Wrapper">
        <p id="ver-text">v1.0.0</p>
        <div className="Ui-Menu" id="hidden" onClick={count} >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    ); }
}

class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: "react"};
  }

  render() {    
    return (
      <div className="Hidden-General-Wrapper">
        <span>
        <div className="App-Level">
          <div className="typewriter">
          <h1>Click To Start</h1>
          </div>
        </div>
        </span>
      </div>
      );
  }
}

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: "react"};
  }

  render() {
    return (
      <div className="Tree-Wrapper">
        <Node></Node>
      </div>
    );
  }
}
class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "react"};
  }

  render() {
    return (
      <div className="Node-Wrapper">
        <div className="Node-Text">
        <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}

/*function reRender() {
  ReactDOM.render(<App />, document.getElementById('root'));
}*/

export default App;
