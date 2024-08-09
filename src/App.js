//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'; //different
import HeaderComponent from './components/header';
import MainContentComponent from './components/mainContent';
import FooterComponent from './components/footer';


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
