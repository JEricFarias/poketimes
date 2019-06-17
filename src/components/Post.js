import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    post: null
  };

  async componentDidMount() {
    const id = this.props.match.params.post_id;
    const post = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );

    this.setState({
      post: post.data
    });

    console.log(this.state.post);
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title.toUpperCase()}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Serching</div>
    );

    return <div className="container">{post}</div>;
  }
}

export default Post;
