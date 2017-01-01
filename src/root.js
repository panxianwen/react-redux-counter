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
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Index from './containers/index';
import App from './containers/app';
import configureStore from './store/configureStore';
import rootSage from './sagas/index';

const store = configureStore();

//run root saga
store.runSaga(rootSage);

class Root extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('rootRedux'));