import React from 'react';

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var results = this.props.reports,
            totalKill,
            totalDeath,
            items;

        // undefを排除
        results = results.filter(result =>{
            if (typeof result.kill !== 'undefined' &&
                typeof result.death !== 'undefined'
               ) {
                   return true;
               }
        });

        totalKill = results.reduce((prev, result) => {
            return prev + +result.kill;
        }, 0);

        totalDeath = results.reduce((prev, result) => {
            return prev + +result.death;
        }, 0);

        var winCount = 0,
            loseCount = 0;

        results.forEach(result => {
            console.log(result);
            if (result.result === 'win') {
                winCount += 1;
            } else if(result.result === 'lose'){
                loseCount += 1;
            }
        });

        console.log(winCount, loseCount);

        return (
            <div>
                トータルキルレ: {totalKill / totalDeath} <br />
                勝率: {winCount / (winCount + loseCount)}
            </div>
        );

    }
}
