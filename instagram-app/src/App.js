import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []    
    };
  }

  componentDidMount () {
    this.setState({ posts: dummyData});
  }

  searchPostHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts:posts })
  }

  render() {
    
    return (
      <div className="App">
        <SearchBar searchTerm={this.state.searchTerm} searchPosts={this.searchPostHandler}/>
        <PostContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
        
      </div>
    );
  }
}

export default App;
