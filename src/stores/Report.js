import { Store } from 'flummox';

export default class MessageStore extends Store {

    constructor(flux) {
        super(); // Don't forget this step

        const reportActionIds = flux.getActionIds('reports');
        this.register(reportActionIds.createMessage, this.handleNewMessage);
        this.register(reportActionIds.createRecord, this.handleNewReport);

        var reports = this.getData();


        this.state = {
            reports: reports,
        };
    }

    handleNewReport(report) {

        var reports = this.state.reports;

        reports.push(report);

        this.setState({
            reports: reports
        });

        this.saveData(reports);
    }

    // 今はLSだが、API経由のDBにする。
    getData() {
        var reports =  JSON.parse(localStorage.getItem('reports')) || [];
        return reports;
    }

    saveData(reports) {
        localStorage.setItem('reports', JSON.stringify(reports));
    }

}
