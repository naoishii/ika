import React from 'react';
import FluxComponent from 'flummox/component';

import ResultList from './ResultList';
import Summary from './Summary';
import RecordAdd from './RecordAdd';

export default class Report extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <FluxComponent connectToStores={['reports']}>
                    <Summary />
                    <ResultList />
                    <RecordAdd />
                </FluxComponent>

            </div>
        );
    }
}
