import React from 'react';
import FluxComponent from 'flummox/component';
import DramPicker from './DramPicker';

export default class RecordAdd extends React.Component {
    constructor(props) {
        super(props);
        this.mapList = [
            { id: 'underpass', name: 'デカライン高架下', image: '', latest: Date.now()},
            { id: 'warehouse', name: 'ハコフグ倉庫', image: '', latest: Date.now() },
            { id: 'skatepark', name: 'Bバスパーク', image: '', latest: Date.now() },
            { id: 'rig', name: '油田', image: '', latest: Date.now() },
            { id: 'mall', name: 'アロワナモール', image: '', latest: Date.now() },
            { id: 'poke', name: 'ホッケ埠頭', image: '', latest: Date.now() },
            { id: 'dome', name: 'モズク農園', image: '', latest: Date.now() }
        ];
        this.state = {
        };
    }

    render() {
        var picked = {};
        picked.map = this.props.results.map;

        return (
            <form>
                <input type="text" name="buki" value={this.state.buki} onChange={this.handleChange.bind(this)} placeholder="buki" autofocus /> <br />
                <input type="text" name="map" value={this.state.map} onChange={this.handleChange.bind(this)} placeholder="map" autofocus /> <br />
                <FluxComponent>
                    <DramPicker onClick={this.handlePick.bind(this)} name='map' list={this.mapList} />
                </FluxComponent>
                <input type="number" name="kill" value={this.state.kill} onChange={this.handleChange.bind(this)} placeholder="kill" required /> <br />
                <input type="number" name="death" value={this.state.death} onChange={this.handleChange.bind(this)} placeholder="death" required /> <br />
                <input type="radio" name="result" value="win" onChange={this.handleChange.bind(this)} /> win <br />
                <input type="radio" name="result" value="lose" onChange={this.handleChange.bind(this)} /> lose <br />
                <input type="submit" value="Add Record" onClick={this.handleSubmit.bind(this)} />
            </form>
        );
    }

    // それぞれバリデーションする必要がありそう
    handleChange(e) {
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(e.target, e.target.getAttribute('name'), e.target.getAttribute('value'));
    }

    handlePick(name, value) {
        var state = this.state;
        state[name] = value;
        this.setState(state);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.kill || !this.state.death) {
            return;
        }
        // emit actionnn
        this.props.flux.getActions('reports').createRecord(this.state);

        this.setState({
            kill: '',
            death: '',
        });
    }
}
