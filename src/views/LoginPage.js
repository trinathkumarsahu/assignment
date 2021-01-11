import React, {Component} from 'react';
import '../assets/StyleSheet/style.css'
import Validator from "../utils/Validator/Validator";
import {EMAIL_RULE, NAME_RULE, PASSWORD_RULE} from "../utils/Validator/Rule";
import jumpTo from "../modules/Navigation";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginShow: true,
            registerShow: false,
            userName: "",
            email: "",
            password: "",
            userNameError: false,
            userNameErrorMessage: "",
            emailError: false,
            emailErrorMessage: "",
            passwordError: false,
            passwordErrorMessage: "",
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    onClickInput = () => {
        this.setState({
            userNameError: false,
            userNameErrorMessage: "",
            emailError: false,
            emailErrorMessage: "",
            passwordError: false,
            passwordErrorMessage: "",
        })
    }

    handleSubmit = () => {
        const {userName, email, password, registerShow} = this.state;
        if (!Validator(userName, NAME_RULE)) {
            console.log(userName);
            this.setState({userNameError: true,});
            return;
        }
        if (registerShow) {
            if (!Validator(email, EMAIL_RULE)) {
                console.log("email Error");
                this.setState({emailError: true,});
                return;
            }
        }
        if (!Validator(password, PASSWORD_RULE)) {
            console.log("password Error");
            this.setState({passwordError: true});
            return;
        }
        jumpTo("/home");
    }

    render() {
        return (
            <div style={{marginTop: 300}}>
                <div className="login-reg-panel">
                    {this.state.registerShow
                        ?
                        <div className="login-info-box">
                            <h2>Have an account?</h2>
                            <p/>
                            <label id="label-register" htmlFor="log-reg-show">Login</label>
                            <input
                                type="radio"
                                name="active-log-panel"
                                id="log-reg-show"
                                onClick={() => this.setState({
                                    registerShow: !this.state.registerShow,
                                    loginShow: !this.state.loginShow
                                })}
                            />
                        </div>
                        :
                        null
                    }
                    {this.state.loginShow
                        ?
                        <div className="register-info-box">
                            <h2>Don't have an account?</h2>
                            <p/>
                            <label id="label-login" htmlFor="log-login-show">Register</label>
                            <input
                                type="radio"
                                name="active-log-panel"
                                id="log-login-show"
                                onClick={() => this.setState({
                                    registerShow: !this.state.registerShow,
                                    loginShow: !this.state.loginShow
                                })}
                            />
                        </div>
                        :
                        null
                    }
                    <div className={this.state.loginShow ? "white-panel" : "white-panel right-log"}>
                        <div className={this.state.loginShow ? "login-show show-log-panel" : "login-show"}>
                            <h2>LOGIN</h2>
                            <input
                                type="text"
                                placeholder="User Name"
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleChange}
                                onClick={this.onClickInput}
                                style={this.state.userNameError ? {border: "1px solid #f90909"} : null}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                onClick={this.onClickInput}
                                style={this.state.passwordError ? {border: "1px solid #f90909"} : null}
                            />
                            <input type="button" value="Login" onClick={() => this.handleSubmit()}/>
                        </div>
                        <div className={this.state.registerShow ? "register-show show-log-panel" : "register-show"}>
                            <h2>REGISTER</h2>
                            <input
                                type="text"
                                placeholder="User Name"
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleChange}
                                onClick={this.onClickInput}
                                style={this.state.userNameError ? {border: "1px solid #f90909"} : null}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                onClick={this.onClickInput}
                                style={this.state.emailError ? {border: "1px solid #f90909"} : null}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                onClick={this.onClickInput}
                                style={this.state.passwordError ? {border: "1px solid #f90909"} : null}
                            />
                            <input type="button" value="Register" onClick={this.handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
