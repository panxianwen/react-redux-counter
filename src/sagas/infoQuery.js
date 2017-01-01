/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description:  </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author panxw
 * @date 2016/11/28
 */
import { put, take, call, fork } from 'redux-saga/effects';

import * as types from '../constants/ActionTypes';
import request from '../utils/RequestUtil';
import {API_INFO_INFOQUERY} from '../constants/Urls';

import {fetchInfoQuery, receiveInfoQuery} from '../actions/infoQuery';

export function* requestInfoQuery (phoneNum) {
    try {
        yield put(fetchInfoQuery(phoneNum));
        const infoList = yield call(request, `${API_INFO_INFOQUERY}`, 'post', phoneNum);
        yield put(receiveInfoQuery(infoList[0]))
    } catch(error) {
        yield put(receiveInfoQuery({}));
        console.info("网络发生错误，请重试")
    }
}

export function* watchRequestInfoQuery () {
    while (true) {
        const { phoneNum } = yield take(types.REQUEST_INFO_QUERY);
        yield fork(requestInfoQuery, phoneNum);
    }
}
