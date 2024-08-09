//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'; //different
import HeaderComponent from './components/Header';
import MainContentComponent from './components/MainContent';
import FooterComponent from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App wrapper">
        <HeaderComponent/>
        <MainContentComponent />
        <FooterComponent/>
      </div>
    );
  }
}


export default App;
