import React, { Component } from 'react';
import './register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = { fields: {} };
        this.state = { msg: "" };
    }
    onInputChange(evt) {
        evt.preventDefault();
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({fields});
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const msg = this.validateForm(this.state.fields);
        this.setState({msg:msg});
        this.setState({ fields: {} });
        console.log(this.state.fields);
    }
    validateForm(fields) {
        this.message = "";
        if (fields.password !== fields.confirmpassword) {
            this.message = "Password mismatch";
        }
        else {
            this.message = "Successfully registered";
        }
        return this.message;
    }

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
                    <PanelBody />
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
    render() {
        return (
            <div className="panel panel-body">
                <div className="row">
                    <div className="col-lg-12">
                        <form id="register-form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="username" tabIndex="1" className="form-control" placeholder="Username" required
                                    value={this.state.fields.username} onChange={this.onInputChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" tabIndex="2" className="form-control" placeholder="Email Address" required
                                    value={this.state.fields.email} onChange={this.onInputChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" tabIndex="3" className="form-control" placeholder="Password" required
                                    value={this.state.fields.password} onChange={this.onInputChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="confirmpassword" tabIndex="4" className="form-control" placeholder="Confirm Password"
                                    required value={this.state.fields.confirmpassword} onChange={this.onInputChange} />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-6 col-sm-offset-3">
                                        <input type="submit" name="register-submit" tabIndex="5" className="form-control btn btn-register" value="Register Now" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <a href="/login" className="forgot-password">Already have an account?Login</a>
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