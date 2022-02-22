//import logo from './logo.png';
import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
    </div>
  );
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="App-Options">
        <div className="Ui-Head">
          <h1 id="Head-Text">Uber Learning</h1>
          <div className="Ui-Menu">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            </div>
          </div>
          
          <div className="Ui-Clock">
          <p id="clock">{this.state.date.toLocaleTimeString()}</p>
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

function tick() {
  ReactDOM.render(
    <Menu />,
    document.getElementById('root')
  );
}
export default App;
