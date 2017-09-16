import React, {Component} from 'react';

export default class Invoer extends Component {

  handleClick =(text) =>{
    //todo remove
    debugger;
    this.props.onSave(text);
  }
    render() {
        return (<div>
            <input type="text" onChange={input => this.handleClick(input.target.value)}/>
            </div>
        );
    }
}
