import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentItem extends Component {

  render() {
    const { body, email, } = this.props.comment;
    return (
      <div className='container' style={{ marginTop: '1rem', }}>
        <p><small>{ email }</small>{ ": " }{ body }</p>
      </div>
    );
  }

}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default CommentItem;