import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentItem from './CommentItem';

class Comments extends Component {

  render() {
    const { comments, } = this.props;
    return comments.map(comment => (
      <CommentItem
        key = { comment.id }
        comment = { comment }
      />
    ));
  }

}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default Comments;