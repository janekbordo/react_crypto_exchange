import React, { Component } from 'react';
import './App.css';
import ChangeButtons from './ChangeButtons';
import axios from 'axios';
import NumberFormat from 'react-number-format';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,ZEC&tsyms=PLN',
      cryptos:[],
    }
  }

  onClick() {
    this.setState = {
      base_url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,ZEC&tsyms=USD'
    }
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,ZEC&tsyms=PLN')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.interval = setInterval(() => 
          this.setState({
            cryptos: cryptos
          }), 1000
        );
      })
      clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
      <ChangeButtons onClick={this.onClick} />
        {Object.keys(this.state.cryptos).map((key) => (
          <div className='crypto-container' currency={key}>
            <span className='left'>{key}</span>
            <span className='right'>
              <NumberFormat value={this.state.cryptos[key].PLN} displayType={'text'}
              thousandSeparator={true} decimalSeparator={'.'} prefix={'PLN'}/>
            </span>  
          </div>
        ))}
      </div>
    );
  }
}

export default App;
