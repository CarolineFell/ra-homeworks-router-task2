import React from 'react';
import faker from 'faker';
import moment from 'moment';
import './PostItem.css';

const PostItem = ({ content, created, children }) => {
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  return (
    <div className="ui centered card">
      <div className="ui small circular image">
        <img src={faker.image.avatar()} alt="avatar" />
      </div>
      <div className="content">
        <a href="#" className="user-name">
          <h3>{faker.name.firstName()}</h3>
        </a>
        <div className="metadata">
          <span className="post-date">
            {moment(created).format("DD.MM.YY HH:mm:ss")}
          </span>
        </div>
        <div className="text">{content}</div>
        <div className="likes-dislikes-favourite">
          <div className="like">
            <i className="thumbs up outline grey icon"></i>
            <span className="number">{randomInteger(1, 500)}</span>
          </div>
          <div className="dislike">
            <i className="thumbs down outline grey icon"></i>
            <span className="number">{randomInteger(1, 500)}</span>
          </div>
          <i className="heart outline grey icon"></i>
        </div>
        <div className="edit">{children}</div>
      </div>
    </div>
  );
};

export default PostItem;
