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
    //expect(output.props.children.props.onSave).toBe('div');


  });





  xit('should call addTodo if length of text is greater than 0', () => {
    // const { output, props } = setup()
    // const input = output.props.children[1]
    // input.props.onSave('')
    // expect(props.addTodo).not.toBeCalled()
    // input.props.onSave('Use Redux')
    // expect(props.addTodo).toBeCalled()
  })


});

