import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import Authenticate from './components/Authentication/Authenticate'

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  } 

  render() {
    
    return (
      <div className="App">
        <ComponentsFromAuthenticate />
        
      </div>
    );
  }
}

const ComponentsFromAuthenticate = Authenticate(PostsPage)(Login);

export default App;
