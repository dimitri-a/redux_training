import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';
import { createRenderer } from 'react-test-renderer/shallow';


describe('Header enzyme style', () => {

  it('does it render', () => {

    const props = {
      addTodo: jest.fn()
    }

    const renderer = createRenderer();
    renderer.render(<Header {...props} />)
    const output = renderer.getRenderOutput()
    console.log('output=',output.props.children);;

    //todo expect component top level type
    expect(output.type).toBe('header');

    output.props.children.props.onSave('');
    expect(props.addTodo).not.toBeCalled()

    output.props.children.props.onSave('fsakhfkjsdh');
    expect(props.addTodo).toBeCalled()
    //expect(output.props.children.props.onSave).toBe('div');


  });



  it('should call addTodo if length of text is greater than 0', () => {

    const props = {
      addTodo: jest.fn()
    }

    const renderer = createRenderer();
    renderer.render(<Header {...props} />)
    const output = renderer.getRenderOutput()
    console.log('output=',output.props.children);;

    //todo expect component top level type
    expect(output.type).toBe('header');

    output.props.children.props.onSave('');
    expect(props.addTodo).not.toBeCalled()

    output.props.children.props.onSave('fsakhfkjsdh');
    expect(props.addTodo).toBeCalled()
  })


});

