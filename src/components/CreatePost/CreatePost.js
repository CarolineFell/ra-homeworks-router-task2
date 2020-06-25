import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import AddForm from "../AddForm/AddForm";

const CreatePost = () => {
  const [saved, setSaved] = useState(false);

  const handleSubmit = (value) => {
    axios
      // пост сохраняется + body: {"id": 0, "content": "То, что введено в поле ввода"}
      .post(`${process.env.REACT_APP_POSTS_URL}/posts`, {
        id: 0,
        content: value,
      })
      .then(() => setSaved(true))
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (saved) {
    // редирект на главную страницу
    return <Redirect to='/' />;
  }

  return <AddForm onSubmit={handleSubmit} />;
};

export default CreatePost;