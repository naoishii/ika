import React from 'react';
import FluxComponent from 'flummox/component';

export default class ResultList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var results = this.props.reports,
            items;
        console.log(results);

        items = results.map(result => {
            return (
                <div>
                    たおした: {result.kill}
                </div>
            );
        });
        return (
            <div>
                {items}
            </div>
        );
    }
}

