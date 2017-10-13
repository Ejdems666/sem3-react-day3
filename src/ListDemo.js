import React, { Component } from 'react';

class ListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [1,2,3,4,5],
            cars: new Cars().getAllCars()
        };
    }

    render() {
        return (
            <div>
                <NumberList numbers={this.state.numbers}/>
                <NumberTable numbers={this.state.numbers}/>
                <CarTable cars={this.state.cars}/>
            </div>
        );
    }
}
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number,index) =>
        <ListItem value={number} key={index}/>
    );
    return (
        <ul>{listItems}</ul>
    );
}

function ListItem(props) {
    const value = props.value;
    return (
        <li>{value}</li>
    );
}

function NumberTable(props) {
    const rowItems = props.numbers.map((number,index) =>
        <tr key={index}><td>{number}</td></tr>
    );
    return (
        <table border="1">
            <tbody>
                {rowItems}
            </tbody>
        </table>
    )
}
class Cars {
    constructor() {
        this._data = [
            {
                id: 1,
                make: "dunno",
                model: "some model",
                year: 1999,
            },
            {
                id: 2,
                make: "2dunno",
                model: "2some model",
                year: 1992,
            },
            {
                id: 3,
                make: "3dunno",
                model: "3some model",
                year: 1993,
            }
        ];
    }

    getAllCars() {
        return this._data;
    }

    getCar(id) {
        return this._data.find((car) => car.id === id);
    }
}

function CarTable(props) {
    const rowItems = props.cars.map((car) =>
        <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
        </tr>
    );
    return (
        <table border="1">
            <tbody>
                {rowItems}
            </tbody>
        </table>
    )
}

export default ListDemo;
