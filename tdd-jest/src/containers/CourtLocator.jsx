import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import MapChooser from '../mapChooser';
import mapChooser from '../mapChooser';
import axios from 'axios';

class CourtLocator extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      currentMap: '',
      courts: []
    };
    
    this.chooseMap = this.chooseMap.bind(this);
  }

  async componentDidMount(){
    let response = await axios.get('http://localhost:3000/data/courts.json');
    this.setState({
      currentMap: this.state.currentMap,
      courts: response.data.courts
    })
  }

  chooseMap(e){
    const theButton = e.target;
    this.setState({currentMap: mapChooser(theButton.value)});
  }

  render() {
    let courtButtons = this.state.courts.map((court, index) => {
      return <Button {...court} key={index} handleClick={this.chooseMap} />
    });

    return (<div>
              <Header />
              <div >
                {courtButtons}
              </div>

              <Map imageName={this.state.currentMap} location={this.props.location} />
            </div>);
  }
}

export default CourtLocator;
