import Actions from './actions';
import AppDispatcher from '../dispatcher/dispatcher';
import Constains from './constants';
import PhanMemService from '../stores/PhanMem/PhanMemService';
import Cookies from 'universal-cookie';

class PhanMemActions extends Actions {
    constructor(props) {
        super(props);
    }
};

export default new PhanMemActions({endPoint: 'api/v1/PhanMems', objectType: 'PhanMems'});