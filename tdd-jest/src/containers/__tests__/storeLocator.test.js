import React from 'react';
import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';

describe("StoreLocator", function(){

  let mountedStoreLocator;
  beforeEach(()=>{
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('renders without crashing', () => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('renders header', () => {
    var headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1);
  });

  it('renders two buttons', () => {
    var buttons = mountedStoreLocator.find('Button');
    expect(buttons.length).toBe(2);
  });

  it('renders map', () => {
    var maps = mountedStoreLocator.find('Map');
    expect(maps.length).toBe(1);
  });
});
