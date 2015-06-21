import React from 'react';
import FluxComponent from 'flummox/component';
import TransitiveNumber from 'react-transitive-number';

import DramPicker from './DramPicker';
import ScorePicker from './ScorePicker';

export default class RecordAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.results;
    }

    render() {
        var dataList = {};

        dataList = {
            mapList: this.props.results.mapList,
            bukiList: this.props.results.bukiList,
            kill: this.props.results.kill,
            death: this.props.results.death,
        };

        return (
            <form>
                <input type="text" name="buki" value={this.state.buki} onChange={this.handleChange.bind(this)} placeholder="buki" autofocus /> <br />
                <FluxComponent>
                    <DramPicker onClick={this.handlePick.bind(this)} name='buki' list={dataList.bukiList} />
                </FluxComponent>

                <input type="text" name="map" value={this.state.map} onChange={this.handleChange.bind(this)} placeholder="map" autofocus /> <br />
                <FluxComponent>
                    <DramPicker onClick={this.handlePick.bind(this)} name='map' list={dataList.mapList} />
                </FluxComponent>

                <FluxComponent>
                    <ScorePicker value={dataList.kill} name='kill' />
                </FluxComponent>

                <FluxComponent>
                    <ScorePicker value={dataList.death} name='death' />
                </FluxComponent>

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
