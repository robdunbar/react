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

});


