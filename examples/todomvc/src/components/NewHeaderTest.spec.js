import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';


describe('Header enzyme style', () => {

  xit('does it render', () => {

    const props = {
      addTodo: jest.fn()
    }

    let cb = shallow(<Header {...props} />)

   // console.log('cb.debug()=', cb.debug());

    expect(cb.text()).toEqual('<TodoTextInput />');
    expect(cb.hasClass('header')).toEqual(true);

    //cb.find('input').simulate('change');

    //console.log('cb =====', cb.find('input'));
    //expect(props.onChange).toBeCalled()

    //todo type 6 length of component/element
    // expect(cb.text()).toEqual('on');


  });

  it('should call addTodo if length of text is greater than 0', () => {

    const props = {
      addTodo: jest.fn()
    }

    let cb = shallow(<Header {...props} />)

    console.log('cb.debug()=', cb.debug());

    expect(props.addTodo).not.toBeCalled()

    //todo this is how you simulate this event!!!
    cb.find('TodoTextInput').simulate("save","fsdhsd");

    expect(props.addTodo).toBeCalled()

    //console.log('cb =====', cb.find('input'));

    //todo type 6 length of component/element
    // expect(cb.text()).toEqual('on');


  });


});

