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
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionsCreators from '../actions/increase';
import Login from '../pages/login/Login';

class LoginContainer extends React.Component {
    render(){
      <Login />
    }
}


// Map Redux state to component props
function mapStateToProps(state)  {
    console.info("app->"+JSON.stringify(state));
    return {
        value: state.increase.count
    };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        increaseActions: bindActionCreators(actionsCreators, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);