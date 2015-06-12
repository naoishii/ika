import { Store } from 'flummox';

export default class MessageStore extends Store {

    constructor(flux) {
        super(); // Don't forget this step

        const reportActionIds = flux.getActionIds('reports');
        this.register(reportActionIds.createMessage, this.handleNewMessage);
        this.register(reportActionIds.createRecord, this.handleNewReport);
        


        this.state = {
            reports: [
                {
                    map: 'b_bus',
                    buki: 'p_shooter',
                    kill: 5,
                    death: 3,
                    result: 'win'
                },
                {
                    map: 'b_bus',
                    buki: 'p_shooter',
                    kill: 9,
                    death: 5,
                    result: 'win'
                },
                {
                    map: 'b_bus',
                    buki: 'p_shooter',
                    kill: 3,
                    death: 5,
                    result: 'win'
                },
            ],
        };
    }

    handleNewReport(report) {
        console.log(report, this.state);

        this.state.reports.push(report);

        this.setState({
            reports: this.state.reports
        });
    }

}
