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
export default class InfoQuery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        let { num, list, infoActions } = this.props;
        console.info(this.props)
        this.setState({
            list: list,
            infoActions: infoActions
        })
        {JSON.stringify(list.data)}
    }
    render(){
        console.info(this.state.list)
        return (
            <div>
                <h4>Redux-saga fetch example</h4>
                <button onClick={this.props.infoActions.requestInfoQuery}>Fetch</button><br/>
                {
                    this.state.list.map(function (str, index) {
                            return (
                                <div className={`rt-full col-${index}`} >
                                    <div className="rt-left ">{str.ord}</div>
                                    <div className="rt-mid ">{str.num}</div>
                                    <div className="rt-right">{str.same}</div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        );
    }
}