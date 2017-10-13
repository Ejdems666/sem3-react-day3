import React from "react";

const myStyle = {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'steelBlue',
    borderStyle: "solid",
    display: "inlineBlock",
    float: "left",
    margin: 5,
    padding: 8,
}

/* You must complete this Component.
  - It should receive a addPerson handler from the parent
  - And use the Controlled Component Pattern to read handle inputs
*/
class NewPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Donald',
            lastName: 'Duck',
            phone: '+49772854687'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleNewPerson(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            phone: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First name
                    <input onChange={this.handleInputChange} type="text" value={this.state.firstName} name="firstName"/>
                </label>
                <label>
                    Last name
                    <input onChange={this.handleInputChange} type="text" value={this.state.lastName} name="lastName"/>
                </label>
                <label>
                    Phone
                    <input onChange={this.handleInputChange} type="text" value={this.state.phone} name="phone"/>
                </label>
                <button>Save</button>
            </form>
        )
    }
}

/* You must complete this Component.
  - It should receive the list of persons from the the parent
  - And create an <ul> containing all names
*/
class AllPersons extends React.Component {
    constructor(props) {
        super(props);
    }

    handleRemove(index) {
        this.props.handleRemove(index);
    }

    render() {
        return (
            <div>
                <p>All Persons</p>
                <table border="1">
                    <tbody>
                    {this.props.persons.map((person, index) =>
                        <tr key={index}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.phone}</td>
                            <td><a onClick={this.handleRemove.bind(this,index)}>Remove</a></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default class StateLift extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    firstName: "Peter",
                    lastName: "Dole",
                    phone: '+1111111111'
                },
                {
                    firstName: "Ole",
                    lastName: "Hore",
                    phone: '+987654815'
                }
            ]
        };
        this.handleNewPerson = this.handleNewPerson.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleNewPerson(person) {
        this.setState({
            persons: this.state.persons.concat([person])
        });
    }

    handleRemove(key) {
        const persons = this.state.persons.filter(function(person,index){
            return index !== key;
        });
        this.setState({
            persons:persons
        });
    }

    render() {
        return (
            <div>
                <h2>Lifting State Up Demo</h2>
                <h4>Total Persons: {this.state.persons.length}</h4>
                <div style={myStyle}>
                    <AllPersons handleRemove={this.handleRemove} persons={this.state.persons}/>
                </div>
                <div style={myStyle}>
                    <NewPerson handleNewPerson={this.handleNewPerson}/>
                </div>
            </div>
        );
    }
}