import React, { Component } from 'react';

class ChangeButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currencies: [
                'PLN',
                'USD',
                'EUR'
            ]
        }
    }

    render() {
        return (
            <div className='change-currency'>
            {Object.keys(this.state.currencies).map((key) => (
                <button className='currency'>{this.state.currencies[key]}</button>
            ))}
            </div>
            
        );
    }
}

export default ChangeButtons;