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
import { combineReducers } from 'redux';

import increase from './increase';
import infoQuery from './infoQuery';

const rootReducer = combineReducers({
    increase,
    infoQuery
});

export default rootReducer;
