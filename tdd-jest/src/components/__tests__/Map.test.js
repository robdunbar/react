import React from 'react';
import {shallow} from 'enzyme';
import Map from '../Map';

describe("Map", function(){
  let mountedMap;
  beforeEach(()=>{
    mountedMap = shallow(<Map />);
  });

  it('renders without crashing', () => {
    mountedMap = shallow(<Map />);
  });

  it('renders an img', () => {
    let images = mountedMap.find('img');
    expect(images.length).toBe(1);
  });

  it('displays the none image when no params are given', ()=>{
    let imageSource = mountedMap.find('img').prop('src');
    expect(imageSource).toBe("images/none.png");
  });

});