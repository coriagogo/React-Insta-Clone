import React from 'react';
import './login.css'; 
import styled from 'styled-components';
import bg from '../../assets/white-texture.png';


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
            <Wrapper>
            <div className="log-in-page">
                <h4 className="welcome">Insta Clone</h4>
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
                        
                        <button className="log-in-btn" onClick={this.handleLoginSubmit}>Log<br></br>In</button>
                    </form>
                </div>
            </div>
            </Wrapper>
        
        )
    }
}

const Wrapper = styled.div `
    background-image: url(${bg});
    border: #ff6f6166;
    border-radius: 10px;
`;



export default Login;