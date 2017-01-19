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

class Login extends React.Component {
    render(){
        return(
            <div className="HolyGrail">
                <div className="HolyGrail-body">
                    <div className="HolyGrail-content">
                        <div id="login-full">
                            <div id="login-main" onKeyDown={this.keyDown.bind(this)}>
                                <div id="login-top">
                                    <img src="/nss/login/images/logo.png"/>
                                    <span>国家安全部-登录</span>
                                </div>
                                <div  className="login-middle">
                                    <img src="/nss/login/images/user.png"/>
                                    <div className="input-full">
                                        <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} placeholder="请输入用户名" required="required"/>
                                    </div>
                                </div>
                                <div  className="login-middle">
                                    <img src="/nss/login/images/password.png"/>
                                    <div className="input-full">
                                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="请输入密码" required="required"/>
                                    </div>
                                </div>
                                <div style={{display: 'none'}} className="login-middle">
                                    <input id="verificationCode" name="verificationCode" value={this.state.verificationCode} onChange={this.handleChange} style={{borderRadius: '5px',fontSize:'16px',paddingLeft:'15px'}} placeholder="请输入手机验证码" required="required"/>
                                    <input  ref="verification" disabled={this.state.verification} className="get-code-btn get-code-btn-primary" style={{width:'100%'}} value="获取手机验证码" onClick={this.getVerificationCode.bind(this)} />
                                </div>

                                <span style={{color: '#e4393c', fontSize: '12px',marginTop:'3px'}}>{this.state.message}</span>
                                <div id="remember-full">
                                    <input type="checkbox" id="remember" name="remember" value="" checked={this.state.isRemember} onClick={this.handleCheckbox}/>
                                    <label htmlFor="remember" class="">记住我</label>
                                    <a href="#" onClick={()=>{alert('请联系管理员')}}>忘记密码?</a>
                                </div>
                                <div id="login-buttom">
                                    <button type="button" id="login" name="login" onClick={this.handleCommit}>登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                                    <button type="reset" id="reset" name="reset" onClick={this.handleReset}>重&nbsp;&nbsp;&nbsp;&nbsp;置</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;