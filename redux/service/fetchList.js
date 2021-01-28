import request from './request';
import { apiBase } from './apiConstant';

function getGiphyList(page){
    return request({ url: `${apiBase}&offset=${page}&limit=25&rating=g`, method:'GET' })
}

export default getGiphyList