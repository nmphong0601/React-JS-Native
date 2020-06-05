import Configuration from '../../configService';
import ResourceService from '../../resourceService';
import qs from 'qs';

class PhanMemService extends ResourceService {
    constructor(props){
        super(props);
    }
}

export default new PhanMemService({endPoint: 'api/v1/phanmems'});