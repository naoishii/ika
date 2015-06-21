import React from 'react';
import TransitiveNumber from 'react-transitive-number';

export default class ScorePicker extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {


        this.props.flux.getActions('results').setList();
    }

    add(num) {
        console.log(this.props.value, this.props.name, num);
        this.props.flux.getActions('results').setScore(this.props.name, this.props.value + num);
    }

    render() {
        var styleMinus5 = {
                backgroundColor: '#e62',
            },
            styleMinus1 = {
                backgroundColor: '#eb2',
            },
            stylePlus1 = {
                backgroundColor: '#35f',
            },
            stylePlus5 = {
                backgroundColor: '#02d',
            };




        return (
            <div className='pure-g' >
                <div className='pure-u-1-5' style={styleMinus5} onClick={this.add.bind(this, -5)}>-5</div>
                <div className='pure-u-1-5' style={styleMinus1} onClick={this.add.bind(this, -1)}>-1</div>
                <div className='pure-u-1-5'>
                    <TransitiveNumber>{this.props.value || 0}</TransitiveNumber>
                </div>
                <div className='pure-u-1-5' style={stylePlus1} onClick={this.add.bind(this, 1)}>+1</div>
                <div className='pure-u-1-5' style={stylePlus5} onClick={this.add.bind(this, 5)}>+5</div>
            </div>
        );
    }
}

