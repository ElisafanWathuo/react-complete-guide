import React, { PureComponent } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
    constructor(props){
        super(props);
        console.log('[App js] Inside Constructor', props);
    }

    componentWillMount(){
        console.log('[App js] Inside componentWillMount');
    }

    componentDidMount(){
        console.log('[App js] Inside componentDidMount()');
    }

    //shouldComponentUpdate (nextProps, nextState) {
    //    console.log('[UPDATE App js] Inside shouldComponentUpdate()', nextProps, nextState);
    //    return nextState.persons !== this.state.persons||
    //    nextState.showPersons !== this.state.showPersons;
    //}

    componentWillUpdate (nextProps, nextState) {
        console.log('[UPDATE App js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate () {
        console.log('[UPDATE App js] Inside componentDidUpdate()');
    }

    state = {
        persons: [
            {id:'tudfb', name: 'Max', age: 28},
            {id:'xcvbg', name: 'Manu', age: 29},
            {id:'cxvbf', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) =>{
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

  render() {
    console.log('[App js] Inside render()');
      let persons = null;


      if(this.state.showPersons){
          persons =
                  <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />;

      }



    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        appTitle={this.props.title} />
        {persons}
      </div>
    );
  //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m a React app!!!'));
  }
}

export default App;
