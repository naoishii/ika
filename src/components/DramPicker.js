import React from 'react';

export default class DramPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list
        };
    }

    toPrev() {
        var list = this.state.list;
        var tmp = list.shift();
        list.push(tmp);
        this.setState({
            list: list
        });
    }

    toNext() {
        var list = this.state.list;
        var tmp = list.pop();
        list.unshift(tmp);
        this.setState({
            list: list
        });
    }


    render() {
        var list = this.state.list;

        console.log(list);
        var items = list.map((item, index) => {
            if (index < 3) {
                return (
                    <Item onClick={this.props.onClick} name={this.props.name} key={item.id} val={item.name} />
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
