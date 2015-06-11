import { Flux } from 'flummox';

import ReportActions from './actions/Report';
import ReportStore from './stores/Report';

export default class AppFlux extends Flux {

    constructor() {
        super();

        this.createActions('reports', ReportActions);

        // The extra argument(s) are passed to the MessageStore constructor
        this.createStore('reports', ReportStore, this);
    }

}
