import React, { Component } from 'react';
import './register.css';

class Login extends Component {
    render() {
        return (
            <div className="page-content">
                <LoginForm
                    title="Login" />
            </div>
        );
    }
}
class LoginForm extends Component{
    render(){
         return(
                <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-login ">
                      <LoginHeading
                      title={this.props.title} />
                      <LoginBody />  
                    </div>
                </div>
            );
    }
}
class LoginHeading extends Component {
    render() {
        return (
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-12">
                        <a className="active">{this.props.title}</a>
                    </div>
                </div>
                <hr/>
            </div>);
    }
}
class LoginBody extends Component{
    render(){
        let style1 ={'paddingTop': '30px'} ;
        let style2 = {'marginBottom': '25px'};
        return(
            <div style={style1} className="panel-body">

                <form className="form-horizontal" >

                    <div style={style2} className="input-group ">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i>
                        </span>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" required/>
                    </div>

                    <div style={style2} className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i>
                        </span>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password " required/>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <input type="submit" name="login-submit" className="form-control btn btn-login" value="Log In"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <a href="/auth/register" className="forgot-password">Don't have an account?Register</a>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;