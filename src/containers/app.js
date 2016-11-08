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

import Counter from '../components/counter';
import * as actionsCreators from '../actions/increase';

class App extends React.Component {
    render(){
        return(
            <Counter {...this.props} />
        );
    }
}


// Map Redux state to component props
function mapStateToProps(state)  {
    return {
        value: state.count
    };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionsCreators, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);