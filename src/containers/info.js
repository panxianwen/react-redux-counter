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

import InfoQuery from '../components/infoQuery';
import * as infoActionsCreators from '../actions/infoQuery';

class Info extends React.Component {
    render(){
        return(
            <div>
                <InfoQuery/>
            </div>
        );
    }
}


// Map Redux state to component props
function mapStateToProps(state)  {
    console.info("infoQuery->"+JSON.stringify(state));
    return {
        num: state.infoQuery.phoneNum,
        list: state.infoQuery.infoList
    };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        infoActions: bindActionCreators(infoActionsCreators, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoQuery);