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
export default class Counter extends React.Component {

    render(){
        let { value, actions } = this.props;
        console.info(this.props)

        return (
            <div>
                <h1>Simplest redux + react example</h1>
                <span>{value}</span>
                <button onClick={actions.increaseAction}>Increase</button>
            </div>
        );
    }
}