import React,{Component} from 'react';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
            firstName: 'Adam',
            secondName: 'Becvar'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name of first quest:
                    <input
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Second Name of first quest:
                    <input
                        name="secondName"
                        type="text"
                        value={this.state.secondName}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <input value="Submit" type="submit"/>
            </form>
        );
    }
}

export default Reservation;