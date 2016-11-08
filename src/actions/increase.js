/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description: IncreaseAction </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author panxw
 * @date 2016/11/7
 */
import * as types from '../constants/ActionTypes';
export function increaseAction() {
    return{
        type: types.COUNTER_INCREASE
    };
}