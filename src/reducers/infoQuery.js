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
 * @date 2016/11/29
 */
import * as types from '../constants/ActionTypes';

const initialState = {
    phoneNum: '18515350934',
    infoList: [
        { "ord":"1","num":"132****6789","same":"94"},
        { "ord":"2","num":"185****3256","same":"90"},
        { "ord":"3","num":"135****5405","same":"87"},
        { "ord":"4","num":"131****9096","same":"83"},
        { "ord":"5","num":"135****1521","same":"78"},
        { "ord":"6","num":"182****2710","same":"70"},
        { "ord":"7","num":"185****0598","same":"63"},
        { "ord":"8","num":"132****0804","same":"52"},
        { "ord":"9","num":"134****1577","same":"42"},
        { "ord":"10","num":"186****4540","same":"30"}
    ]
};
export default function fetchInfoData(state=initialState, action) {
    switch (action.type) {
        case types.FETCH_INFO_QUERY:
           return Object.assign({}, state, {
               phoneNum: action.phoneNum
           });
        case types.RECEIVE_INFO_QUERY:
            return Object.assign({}, state, {
                infoList: action.infoList
            })
        default:
            return state;
    }
}
