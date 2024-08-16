//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'; //different
import HeaderComponent from './components/Header';
import MainContentComponent from './components/MainContent';
import FooterComponent from './components/Footer';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App wrapper">
          <HeaderComponent />
          <MainContentComponent />
          <FooterComponent />
        </div>
        </BrowserRouter >
        );
  }
}


        export default App;
