import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import pokeball from '../pokeball.png';

class Home extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(response);

    const posts = response.data.slice(0, 10);
    this.setState({
      posts
    });
  }

  render() {
    const posts = this.state.posts;
    const postLists = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={pokeball} alt="Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title.toUpperCase()}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No content yet</div>
    );

    return (
      <div className="home container">
        <h4 className="center">Home</h4>
        {postLists}
      </div>
    );
  }
}

export default Home;
