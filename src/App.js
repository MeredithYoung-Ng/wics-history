import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import gwc from './imgs/gwc.jpg';
import Body from "./Body";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img src={gwc} className="GWC" alt="Girls Who Code" />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
