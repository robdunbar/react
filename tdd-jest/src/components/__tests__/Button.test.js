import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

describe("Button", function(){
  let mountedButton;
  beforeEach(()=>{
    mountedButton = shallow(<Button />);
  });

  it('renders without crashing', () => {
    mountedButton = shallow(<Button />);
  });

  it('renders a button', () => {
    let buttons = mountedButton.find('button');
    expect(buttons.length).toBe(1);
  });

  it('call a function passed to it when clicked',()=>{
    const mockCallBack = jest.fn();
    const mountedButtonWithCallBack = shallow(<Button handleClick={mockCallBack}></Button>);
    mountedButtonWithCallBack.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

describe("when a location is passed to it", () =>{
  let mountedButton;
  let props;

  beforeEach(()=>{
    props = {
      location: "Location1"
    }

    mountedButton = shallow(<Button {...props} />);
  });

  it("displays the location", ()=>{
    const locationName = mountedButton.find('.location-button');
    expect(locationName.text()).toEqual('Location1');
  });
});

describe("when NO location is passed to it", () =>{
  let mountedButton;
  let props;

  beforeEach(()=>{
    props = {
      location: undefined
    }

    mountedButton = shallow(<Button {...props} />);
  });

  it("displays all locations", ()=>{
    const locationName = mountedButton.find('.location-button');
    expect(locationName.text()).toEqual('All Locations');
  });
});