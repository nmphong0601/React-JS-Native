import Configuration from '../../configService';
import ResourceService from '../../resourceService';
import qs from 'qs';

class NhomQuyenService extends ResourceService {
    constructor(props){
        super(props);
    }
}

export default new NhomQuyenService({endPoint: 'api/v1/NhomQuyens'});