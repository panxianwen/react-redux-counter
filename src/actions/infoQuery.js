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

export function requestInfoQuery(phoneNum) {
    return {
        type: types.REQUEST_INFO_QUERY,
        phoneNum: '18515350934',
        infoList: [{
            "data": {
                "personInfo": {
                    "name": "张鹏",
                    "gender": "男",
                    "age": "35",
                    "phone": "13049394650",
                    "idcard": "1301301980382811940",
                    "belongToPhoneNum": "北京",
                    "model": "iphone6s",
                    "weixinID": "未知",
                    "taobaoID": "未知",
                    "qqID": "未知",
                    "weiboID": "未知"
                }
            }
        }]
    }
}

export function fetchInfoQuery(phoneNum) {
    return{
        type: types.FETCH_INFO_QUERY,
        phoneNum: phoneNum
    };
}
export function receiveInfoQuery(infoList) {
    return{
        type: types.RECEIVE_INFO_QUERY,
        infoList:infoList
    };
}