import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import './AddForm.css';

const AddForm = ({ content, onSubmit, children }) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (content) {
      setValue(content);
    }
  }, [content]);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    onSubmit(value);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleClear = (event) => {
    setValue('');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <form className="ui form">
      <div className="field">
        <textarea onChange={handleChange} value={value}></textarea>
      </div>
      <div className="buttons">
        <div className="ui submit button publish" onClick={(evt) => handleSubmit(evt)}>Publish</div>
        <div className="ui button clear" onClick={(evt) => handleClear(evt)}>Clear</div>
        {children}
      </div>
    </form>
  );
};

export default AddForm;