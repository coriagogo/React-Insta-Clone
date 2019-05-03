import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/white-texture.png';

const Wrapper = styled.div `
    background-image: url(${bg});   
    border-radius: 10px;
    height: 600px;
`;

const LogInHeader = styled.div`
    padding-top: 40px;
    color: #ff6f61;
    font-family: "Helvetica Neue";
    font-size: 40px;
`

const LogInForm = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    margin: 0 auto;
`

const LogInInput = styled.input`
    border: 1px solid #ff6f61;
    height: 30px;
    border-radius: 2px;
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
    font-weight: 300;
`

const LogInButton =styled.button`
    margin-top: 10px;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background-color: #ff6f6166;
    border: 1px solid #ff6f61;
    color: #ff6f61;
    font-weight: bold;
    font-size: 20px;

    &:hover {
        background-color: #ff6f61;
        color: white;
    }
`


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
                <LogInHeader>Insta Clone</LogInHeader>
                <LogInForm>
                    <LogInInput 
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleLoginChange} />

                    <LogInInput 
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleLoginChange} />
                </LogInForm>  
                <LogInButton onClick={this.handleLoginSubmit}>Log<br />In</LogInButton>
            </Wrapper>
        )
    }
}

export default Login;