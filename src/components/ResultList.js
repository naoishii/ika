import React from 'react';

export default class ResultList extends React.Component {
    constructor(props) {
        super(props);
    }

    calcRate(kill, death) {
        if (death === 0) {
            death = 1;
        }

        return kill / death;
    }

    render() {
        var results = this.props.reports,
            items;

        items = results.map(result => {
            return (
                <tr>
                    <td>{result.buki}</td>
                    <td>{result.map}</td>
                    <td>{result.kill}</td>
                    <td>{result.death}</td>
                    <td>{result.result}</td>
                    <td>{this.calcRate(result.kill, result.death)}</td>
                </tr>
            );
        });

        return (
            <div>
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>ブキ</th>
                            <th>マップ</th>
                            <th>たおした</th>
                            <th>やられた</th>
                            <th>勝敗</th>
                            <th>キルレ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        );
    }
}
