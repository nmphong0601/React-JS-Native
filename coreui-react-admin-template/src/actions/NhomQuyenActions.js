import Actions from '../actions/actions';
import Constants from '../actions/constants';
import AppDispatcher from '../dispatcher/dispatcher';
import NhomQuyenService from '../stores/NhomQuyen/NhomQuyenService';
import Cookies from 'universal-cookie';

class NhomQuyenActions extends Actions {
    constructor(props) {
        super(props);
    }
};

export default new NhomQuyenActions({endPoint: 'api/v1/NhomQuyens', objectType: 'NhomQuyens'});