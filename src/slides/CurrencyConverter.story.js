import React from 'react';
import { storiesOf } from '@storybook/react';

const rates = {
    USD: {
        USD: 1,
        ARS: 20
    },
    ARS: {
        ARS: 1,
        USD: 1 / 20
    }
};

class CurrencyConverter extends React.Component {
    constructor() {
        super();
        this.state = {
            fromAmount: '',
            fromCurrency: 'USD',
            toAmount: '',
            toCurrency: 'ARS'
        };
        this.handleFromAmountChange = this.handleFromAmountChange.bind(this);
        this.handleFromCurrencyChange = this.handleFromCurrencyChange.bind(this);
        this.handleToCurrencyChange = this.handleToCurrencyChange.bind(this);
    }

    handleFromAmountChange({ target: { value } }) {
        const rate = rates[this.state.fromCurrency][this.state.toCurrency];

        this.setState({
            fromAmount: value,
            toAmount: value ? parseInt(value) * rate : ''
        });
    }
    handleFromCurrencyChange({ target: { value } }) {
        this.setState({ fromCurrency: value });
    }
    handleToCurrencyChange({ target: { value } }) {
        this.setState({ toCurrency: value })
    }

    render() {
        const { fromAmount, fromCurrency, toAmount, toCurrency } = this.state;

        return (
            <div>
                <MoneyInput
                    amount={fromAmount}
                    onAmountChange={this.handleFromAmountChange}
                    currency={fromCurrency}
                    onCurrencyChange={this.handleFromCurrencyChange}
                />
                <MoneyInput
                    amount={toAmount}
                    currency={toCurrency}
                    onCurrencyChange={this.handleToCurrencyChange}
                />
            </div>
        );
    }
}

class MoneyInput extends React.Component {
    render() {
        const { amount, onAmountChange, currency, onCurrencyChange } = this.props;

        return (
            <div>
                <select
                    value={currency}
                    onChange={onCurrencyChange}
                >
                    <option value="USD">USD</option>
                    <option value="ARS">ARS</option>
                </select>
                <input
                    type="number"
                    value={amount}
                    onChange={onAmountChange}
                />
            </div>
        );
    }
}

storiesOf('Slides', module).add('Currency Converter', () => <CurrencyConverter/>);
