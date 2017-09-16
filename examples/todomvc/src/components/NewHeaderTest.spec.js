import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';


describe('Header enzyme style', () => {

  it('does it render', () => {

    const props = {
      addTodo: () => {
      }
    }

    const wrapper = shallow(<Header {...props}/>)

    expect(wrapper.find('header').length).toEqual(1);
  });

  it('should call addTodo if length of text is greater than 0', () => {

    const props = {
      addTodo: jest.fn()
    }

    const wrapper = shallow(<Header {...props}/>)

    wrapper.find('input').simulate('change');

    expect(props.addTodo).toBeCalled();

  });


});

