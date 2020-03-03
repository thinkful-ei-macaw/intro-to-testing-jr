import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

//Snapshot Test
describe('<Card />', () => {

  // all my test cases here

//Smoke Test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Card title= 'Card' content='anystring' />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

});
