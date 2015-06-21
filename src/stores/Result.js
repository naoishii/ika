import { Store } from 'flummox';

export default class ResultStore extends Store {

    constructor(flux) {
        super(); // Don't forget this step

        const reportActionIds = flux.getActionIds('results');
        this.register(reportActionIds.setMap, this.handleSetMap);
        this.register(reportActionIds.setList, this.handleSetList);
        this.register(reportActionIds.setScore, this.handleSetScore);

        var mapList = [
            { id: 'underpass', name: 'デカライン高架下', image: '', latest: Date.now()},
            { id: 'warehouse', name: 'ハコフグ倉庫', image: '', latest: Date.now() },
            { id: 'skatepark', name: 'Bバスパーク', image: '', latest: Date.now() },
            { id: 'rig', name: '油田', image: '', latest: Date.now() },
            { id: 'mall', name: 'アロワナモール', image: '', latest: Date.now() },
            { id: 'poke', name: 'ホッケ埠頭', image: '', latest: Date.now() },
            { id: 'dome', name: 'モズク農園', image: '', latest: Date.now() }
        ];
        var bukiList = [
            { id: 'wakaba', name: 'わかばシューター', image: '', latest: Date.now()},
            { id: 'blaster_c', name: 'ホットブラスターカスタム', image: '', latest: Date.now()},
            { id: 'roller', name: 'スプラローラー', image: '', latest: Date.now()},
            { id: '98gal', name: '.98ガロン', image: '', latest: Date.now()},
            { id: '52gal_d', name: '.52ガロンデコ', image: '', latest: Date.now()},
        ];

        this.state = {
            results: {
                mapList: mapList,
                bukiList: bukiList,
                kill: 0,
                death: 0
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

        [name, list] = [data.name, data.list];
        results[name + 'List'] = list;
        this.setState({
            results: results
        });
    }

    handleSetScore(data) {
        var results = this.state.results,
            name, score;

        [name, score] = [data.name, data.score];
        results[name] = score;
        this.setState({
            results: results
        });
    }

}

