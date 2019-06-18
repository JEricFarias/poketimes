import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    const posts = this.props.posts;
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

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
