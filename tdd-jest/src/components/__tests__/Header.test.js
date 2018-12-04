import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header';


describe("Header", function(){
  let mountedHeader;
  beforeEach(()=>{
    mountedHeader = shallow(<Header />);
  });

  it('renders without crashing', () => {
    mountedHeader = shallow(<Header />);
  });

  it('renders the logo', () => {
    const logoImgSrc = mountedHeader.find('img').prop('src');
    expect(logoImgSrc).toBe("images/logo.jpg");
  });

});