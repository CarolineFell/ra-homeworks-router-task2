import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import PostItem from '../PostItem/PostItem';
import AddForm from '../AddForm/AddForm';
import Error404 from '../Error404/Error404';
import Loader from '../Loader/Loader';
import './ViewPost.css';

class ViewPost extends React.Component {
  state = {
    post: null,
    deleted: false,
    edited: false,
    loading: true,
  };

  componentDidMount() {
    const { match: { params } } = this.props;
    const id = Number(params.id);
    axios.get(`${process.env.REACT_APP_POSTS_URL}/posts`).then((response) => {
      const post = response.data.find((item) => item.id === id);
      this.setState({ post, loading: false });
    });
  }

  toggleEditing = () => {
    this.setState((prevState) => ({
      edited: !prevState.edited,
    }));
  };

  handleDelete = () => {
    this.setState({ loading: true });
    const { match: { params } } = this.props;

    axios
      .delete(`${process.env.REACT_APP_POSTS_URL}/posts/${params.id}`)
      .then(() => this.setState({ deleted: true }))
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleEdit = (value) => {
    axios
      .post(`${process.env.REACT_APP_POSTS_URL}/posts`, {
        id: this.state.post.id,
        content: value,
      })
      .then(() => this.props.history.go(0))
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const { post, deleted, edited, loading } = this.state;

    if (deleted) {
      return <Redirect to="/" />;
    }

    if (edited) {
      return (
        <AddForm content={post.content} onSubmit={this.handleEdit}>
          <div className="ui button" onClick={() => this.toggleEditing()}>Cancel</div>
        </AddForm>
      );
    }

    if (post === undefined) {
      return <Error404 />;
    }

    if (loading) {
      return <Loader />;
    }

    return (
      <div className="ui comments">
        <PostItem {...post}>
          <Link to={`/`} className="back">
            <i className="arrow alternate circle left outline grey icon"></i>
          </Link>
            <i className="edit outline grey icon" onClick={this.toggleEditing}></i>
            <i className="delete grey icon" onClick={this.handleDelete}></i>
        </PostItem>
      </div>
    );
  }
}

export default ViewPost;