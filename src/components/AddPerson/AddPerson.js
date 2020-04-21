import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangeHandler = (e) => {
        this.setState({name: e.target.value});
    }
    ageChangeHandler = (e) => {
        this.setState({age: e.target.value});
    }

    render () {
        return (
         <div className="AddPerson">
        <input 
        type="text" 
        placeholder="Name"
        onChange={this.nameChangeHandler}
        value={this.state.name} />
        <input 
        type="number" 
        placeholder="Age"
        onChange={this.ageChangeHandler}
        value={this.state.age} />
        <button onClick={()=>this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
    </div>
        );
    }
}

export default AddPerson;