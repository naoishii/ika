import { Flux } from 'flummox';

import ReportActions from './actions/Report';
import ReportStore from './stores/Report';

import ResultActions from './actions/Result';
import ResultStore from './stores/Result';

export default class AppFlux extends Flux {

    constructor() {
        super();

        this.createActions('reports', ReportActions);
        this.createStore('reports', ReportStore, this);

        this.createActions('results', ResultActions);
        this.createStore('results', ResultStore, this);
    }

}
