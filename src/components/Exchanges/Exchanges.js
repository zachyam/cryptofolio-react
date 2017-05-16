import React, { Component } from 'react';
import '../../css/index.css';
import '../../css/paper-dashboard.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// list of all exchanges
const exchanges = [
  { value: 'coinbase', label: 'Coinbase' },
  { value: 'gemini', label: 'Gemini' },
  { value: 'poloniex', label: 'Poloniex' },
  { value: 'kraken', label: 'Kraken'},
]

// list of selected exchanges
const selectedExchanges = [];


class Exchanges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exchanges,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(val) {
    if (!selectedExchanges.includes(val.value)) {
      selectedExchanges.push(val.value);
    }
    this.setState = { selectedExchanges };

    console.log("STATE", this.state);
    console.log("SELECTED", selectedExchanges);
  }


  render() {
    return (
      <Select
        name="form-field-name"
        value="one"
        options={exchanges}
        onChange={this.onChange}
      />
    );
  }
}

export default Exchanges;
