import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleLoginChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return(

            <div classname="log-in-page">
                <h4>Welcome to my React Insta Clone!</h4>
                <div className="log-in-form">
                    <form>
                        <input 
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleLoginChange}
                        />

                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleLoginChange}
                        />

                        <button className="log-in-btn" onClick={this.handleLoginSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;