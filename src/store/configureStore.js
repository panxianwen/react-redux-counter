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
 * @date 2016/11/8
 */
import {createStore} from 'redux'
import counterReducer from '../reducers/increase';

export default function configureStore() {
    // Store:
    let store = createStore(counterReducer);
    return store;
}
