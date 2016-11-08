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
 * @date 2016/11/7
 */
import * as types from '../constants/ActionTypes';

const initialState = {
    count: 0
};
export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.COUNTER_INCREASE:
            return Object.assign({}, state, {
                count: state.count+1
            });
        default:
            return state;
    }
}