import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';

import Comments from '../comment/Comments';

class PostItem extends Component {

  state = {
    user: {},
    comments: [],
    showComments: false,
  }

  componentDidMount() {
    const { id, userId, } = this.props.post;
    // get the users
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));

    // get the comments
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { title, body, } = this.props.post;
    const { user, comments, showComments, } = this.state;
    return (
      <div className='container text-left'>
        <h3><a href='#'>{ title }</a></h3>
        <small>{ user.email }</small>
        <p>{ body }</p>
        <Button variant='outline-dark' size='sm' block
          onClick={ () => this.setState({ showComments: !showComments }) }>Comments</Button>
        { showComments ? <Comments comments={ comments } /> : ""}
        <hr className='divider' />
      </div>
    );
  }

}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostItem;