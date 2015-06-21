
import { Actions } from 'flummox';

export default class ResultAction extends Actions {

    setBuki(buki) {
        return buki;
    }

    // array
    setList(name, list) {
        return {name, list};
    }

    // number
    setScore(name, score){
        return {name, score};
    }

    setMap(map) {
        return map;
    }


    createRecord(data) {
        return data;
    }

}

