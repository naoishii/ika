import { Store } from 'flummox';

export default class ResultStore extends Store {

    constructor(flux) {
        super(); // Don't forget this step

        const reportActionIds = flux.getActionIds('results');
        this.register(reportActionIds.setMap, this.handleSetMap);
        this.register(reportActionIds.setList, this.handleSetList);

        var mapList = [
            { id: 'underpass', name: 'デカライン高架下', image: '', latest: Date.now()},
            { id: 'warehouse', name: 'ハコフグ倉庫', image: '', latest: Date.now() },
            { id: 'skatepark', name: 'Bバスパーク', image: '', latest: Date.now() },
            { id: 'rig', name: '油田', image: '', latest: Date.now() },
            { id: 'mall', name: 'アロワナモール', image: '', latest: Date.now() },
            { id: 'poke', name: 'ホッケ埠頭', image: '', latest: Date.now() },
            { id: 'dome', name: 'モズク農園', image: '', latest: Date.now() }
        ];

        this.state = {
            results: {
                mapList: mapList
            }
        };
    }

    handleSetMap(map) {
        var results = this.state.results;
        results.map = map;
        this.setState({
            results: results
        });
    }

    handleSetList(data) {
        var results = this.state.results,
            name, list;

        [name, list] = [data[0], data[1]];
        results[name + 'List'] = list;
        this.setState({
            results: results
        });
        console.log(name, list);
        console.log(this.state);
    }


}

