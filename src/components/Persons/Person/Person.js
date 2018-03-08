import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0 ){
            this.inputElement.focus();
        }
    }
    render () {
        console.log('[Person.js] Inside render()');
        return (
            <Auxiliary>
               <p onClick={this.props.click}>i am {this.props.name} and i am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input 
                    ref={(inp) => { this.inputElement = inp }}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Auxiliary>
        )
        //return [
        //    <p key="1" onClick={this.props.click}>i am {this.props.name} and i am {this.props.age}</p>,
        //        <p key="2">{this.props.children}</p>,
        //        <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        //]
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);
