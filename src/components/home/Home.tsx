import React from 'react';
import './Home.css';
import Header from '../header/Header';
import Map from '../map/Map';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }
}

export default Home;