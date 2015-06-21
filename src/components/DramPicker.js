import React from 'react';

export default class DramPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(name, value) {
        this.props.onClick(name, value);
        var list = this.props.list.map(item => {
            if (item.name === value) {
                item.latest = Date.now();
            }
            return item;
        }).sort((a, b) => a.latest < b.latest);


        this.props.flux.getActions('results').setList(name, list);
    }

    toPrev() {
        var list = this.props.list;
        var tmp = list.shift();
        list.push(tmp);
        this.props.flux.getActions('results').setList(this.props.name, list);
    }

    toNext() {
        var list = this.props.list;
        var tmp = list.pop();
        list.unshift(tmp);
        this.props.flux.getActions('results').setList(this.props.name, list);
    }


    render() {
        var list = this.props.list;

        console.log(list);
        var items = list.map((item, index) => {
            if (index < 12) {
                return (
                    <Item onClick={this.handleClick.bind(this, this.props.name, item.name)} name={this.props.name} key={item.id} val={item.name} />
                );
            }
        });




        return (
            <ul>
                <li onClick={this.toPrev.bind(this)}>←</li>
                    {items}
                <li onClick={this.toNext.bind(this)}>→</li>
            </ul>
        );
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onClick={this.props.onClick} name={this.props.name} key={this.props.id} data-value={this.props.val}>
                {this.props.val}
            </li>
        );
    }
}
