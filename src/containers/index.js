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
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './app';
import Info from './info';
import * as increaseActionsCreators from '../actions/increase';
import * as infoActionsCreators from '../actions/infoQuery';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <App />
                <Info {...this.props}/>
            </div>
        );
    }
}
// Map Redux state to component props
function mapStateToProps(state)  {
    console.info("index->"+JSON.stringify(state));
    return {
        increase: state.increase,
        infoQuery: state.infoQuery
    };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        increaseActions: bindActionCreators(increaseActionsCreators, dispatch),
        infoActions: bindActionCreators(infoActionsCreators, dispatch)
    };
}

export  default connect(mapStateToProps, mapDispatchToProps)(Index)
