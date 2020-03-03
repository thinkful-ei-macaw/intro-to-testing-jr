import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


//Snapshot Test
it('renders without crashing', () => {
  const div = document.createElement('div');
  
 
  ReactDOM.render(<List header = 'something'
  cards = {[{ id: 'b', title: 'Second card', content: 'lorem ipsum' },
  { id: 'c', title: 'Third card', content: 'lorem ipsum' }]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//Snapshot test
it('renders the UI as expected', () => {
  const tree = renderer
    .create(<List header = 'First String' cards = {[]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });


