import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  render() {
    let imagePath = "images/None.png";
    if (this.props.imageName){
      imagePath = this.props.imageName;
    }

    return (
    <div className="MapBox">
      <img src={imagePath} alt="Map displaying the location of basketball courts." />
    </div>
    );
  }
}

export default Map;
