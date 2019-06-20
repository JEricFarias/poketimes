import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  handleRemove = () => {
    const id = this.props.post.id;
    this.props.deletePost(id);
    this.props.history.push('/');
  };

  render() {
    const post = this.props.post;
    const postJsx = post ? (
      <div className="post">
        <h4 className="center">{post.title.toUpperCase()}</h4>
        <p>{post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleRemove}>
            Delete
          </button>
        </div>
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
    post: state.posts.filter(post => post.id === param_id)[0]
  };
};

const mapDispatchToParams = dispatch => {
  return {
    deletePost: id => {
      dispatch({ type: 'DELETE_POST', id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToParams
)(Post);
