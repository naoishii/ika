import { Store } from 'flummox';

export default class ResultStore extends Store {

    constructor(flux) {
        super(); // Don't forget this step

        const reportActionIds = flux.getActionIds('results');
        this.register(reportActionIds.setMap, this.handleSetMap);


        this.state = {
            results: {}
        };
    }

    handleSetMap(map) {
        var results = this.state.results;
        results.map = map;
        this.setState({
            results: results
        });
    }


}

