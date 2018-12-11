import React from 'react';
import {shallow} from 'enzyme';
import CourtLocator from '../CourtLocator';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe("CourtLocator", function(){

  let mountedCourtLocator;
  beforeEach(()=>{
    mountedCourtLocator = shallow(<CourtLocator />);
  });

  it('renders without crashing', () => {
    mountedCourtLocator = shallow(<CourtLocator />);
  });

  it('renders header', () => {
    var headers = mountedCourtLocator.find('Header');
    expect(headers.length).toBe(1);
  });

  it('renders map', () => {
    var maps = mountedCourtLocator.find('Map');
    expect(maps.length).toBe(1);
  });

  it ('renders correctly', ()=>{
    const tree = renderer.create(<CourtLocator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls axios.get in #componentDidMount', ()=>{
    return mountedCourtLocator.instance().componentDidMount().then(
      ()=>{
        expect(axios.get).toHaveBeenCalled();
      }
    );
  });

  it('calls axios.get with correct url', ()=>{
    return mountedCourtLocator.instance().componentDidMount().then(
      ()=>{
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/courts.json');
      }
    );
  });

  it('updates state with api data', ()=>{
    return mountedCourtLocator.instance().componentDidMount().then(
      ()=>{
        expect(mountedCourtLocator.state()).toHaveProperty('courts', [
          {
            "location": "test location",
            "address": "test address"
          }
        ]);
      }
    );
  });
});

describe('chooseMap', ()=>{
  it('updates this.state.currentMap using the location passed to it', ()=>{
    const mountedCourtLocator = shallow(<CourtLocator />);
    const mockEvent = {target:{value:'testland'}};
    mountedCourtLocator.instance().chooseMap(mockEvent);
    expect(mountedCourtLocator.instance().state.currentMap).toBe('images/testland.png');
  });
});