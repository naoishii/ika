
import { Actions } from 'flummox';

export default class ResultAction extends Actions {

    setBuki(buki) {
        return buki;
    }

    setList(name, list) {
        return [name, list];
    }

    setMap(map) {
        return map;
    }

    createRecord(data) {
        return data;
    }

}

