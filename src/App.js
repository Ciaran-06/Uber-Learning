//import logo from './logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let toggleMen = 0;

function count() {
  toggleMen++;
  console.log(toggleMen);
  ReactDOM.render(<App />, document.getElementById('root'));
}

function App() {
  if (toggleMen % 2 == 0) {
    return (<div className="App"><Menu></Menu></div>);
  }
  else 
  {
    return (<div className="App"><MenuHidden></MenuHidden></div>);
  }
  
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: "react"};
  }


  render() {
    const {showhide} = this.props;
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
            <div className="Ui-Menu-Choice" id="Ui-Menu-Choice-Top">
              <p>Github</p>
            </div>
            <div className="Ui-Menu-Choice">
              <p>Linkdin</p>
            </div>
            <div className="Ui-Menu-Choice">
              <p>Load Level</p>
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
    <div className="Ui-Menu" id="hidden" onClick={count}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
    ); }
}

export default App;
