import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

// Test Suite for App
describe("App", function(){

  // Spec - i.e. the requirement to render without crashing
  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('renders a storeLocator', () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  });
  
});
