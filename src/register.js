import React, { Component } from 'react';
import './register.css';

class Register extends Component {
    render() {
        return (
            <div className="page-content">
                <RegisterForm
                    title="Register" />
            </div>
        );
    }
}
class RegisterForm extends Component {
    render() {
        return (
            <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div className="panel panel-login">
                    {/* panel-heading
                    Pass down the title to the child */}
                    <PanelHeading
                        title={this.props.title}
                    />
                    {/* panel body*/}
                    <PanelBody
                    />
                </div>
                {/* panel-login*/}
            </div>
        );
    }
}
class PanelHeading extends Component {
    render() {
        return (
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-12">
                        <a className="active" id="register-form-link">{this.props.title}</a>
                    </div>
                </div>
                <hr />
            </div>);
    }
}
class PanelBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
            response: ''
        } ;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        this.setState({ 
            username: evt.target.username.value,
            email:evt.target.email.value,
            password:evt.target.password.value,
            confirmpassword:evt.target.confirmpassword.value
         });
        var res = this.validateForm(this.state.password, this.state.confirmpassword);
        this.setState({response : res})
        console.log(res);
        evt.preventDefault();
    }
    validateForm(pwd, cpwd) {
        var message = "";
        if (pwd !== cpwd) {
            message = "Password mismatch";
        }
        else {
            message = "Successfully registered";
        }
        return message;
    }

    render() {
        return (
            <div className="panel panel-body">
                <div className="row">
                    <div className="col-lg-12">
                        <form id="register-form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="username" tabIndex="1" className="form-control" placeholder="Username" required
                                     />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" tabIndex="2" className="form-control" placeholder="Email Address" required
                                     />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" tabIndex="3" className="form-control" placeholder="Password" required
                                     />
                            </div>
                            <div className="form-group">
                                <input type="password" name="confirmpassword" tabIndex="4" className="form-control" placeholder="Confirm Password"
                                     />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-6 col-sm-offset-3">
                                        <input type="submit" name="register-submit" tabIndex="5" className="form-control btn btn-register" value="Register Now" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <a href="/auth/login" className="forgot-password">Already have an account?Login</a>
                            </div>
                        </form>
                        {/* Register form */}
                    </div>
                    {/*col-lg-12*/}
                </div>
                {/*row*/}
            </div>

        );
    }
}


export default Register;