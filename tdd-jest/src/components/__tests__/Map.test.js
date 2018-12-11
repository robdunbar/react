import React from 'react';
import {shallow} from 'enzyme';
import Map from '../Map';

describe("Map", function(){
  it('renders without crashing', () => {
    shallow(<Map />);
  });

  it('contains an img', () => {
    let defaultMap = shallow(<Map />);
    let images = defaultMap.find('img');
    expect(images.length).toBe(1);
  });

  it('displays the none image when no params are given', ()=>{
    let defaultMap = shallow(<Map />);
    let imageSource = defaultMap.find('img').prop('src');
    expect(imageSource).toBe("images/None.png");
  });

  it('displays the map \'imageName\' passed to it', ()=>{
    let mountedMap = shallow(<Map imageName='testmap' />);
    let imageSource = mountedMap.find('img').prop('src');
    expect(imageSource).toBe("testmap");
  });
});