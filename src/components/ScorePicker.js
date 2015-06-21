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

        return (
            <div>
                <div onClick={this.add.bind(this, -5)}>-5</div>
                <div onClick={this.add.bind(this, -1)}>-1</div>
                <TransitiveNumber>{this.props.value || 0}</TransitiveNumber>
                <div onClick={this.add.bind(this, 1)}>+1</div>
                <div onClick={this.add.bind(this, 5)}>+5</div>
            </div>
        );
    }
}

