import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

import Header from './component/layout/Header';
import Posts from './component/post/Posts';

class App extends React.Component {

  state = {
    posts: [],
  }

  componentDidMount() {
    // get the posts
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({ posts: res.data.slice(0, 10) }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App container">
          <Posts posts={ this.state.posts } />
        </div>
      </div>
    )
  }

} 

export default App;
