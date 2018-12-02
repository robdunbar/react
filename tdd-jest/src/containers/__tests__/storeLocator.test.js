import React from 'react';
import ReactDOM from 'react-dom';
import StoreLocator from '../storeLocator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreLocator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
