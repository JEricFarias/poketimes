import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    const post = this.props.post[0];
    const postJsx = post ? (
      <div className="post">
        <h4 className="center">{post.title.toUpperCase()}</h4>
        <p>{post.body}</p>
      </div>
    ) : (
      <div className="center">NotFound</div>
    );

    return <div className="container">{postJsx}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const param_id = Number.parseInt(ownProps.match.params.post_id);
  return {
    post: state.posts.filter(post => post.id === param_id)
  };
};

export default connect(mapStateToProps)(Post);
