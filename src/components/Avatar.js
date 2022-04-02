import React from 'react';

const Avatar = (props) => {
  return (
    <div>
      <img src={props.avatar}/>
      <h4>{props.firstName}</h4>
      <h4>{props.lastName.toUpperCase()}</h4>
    </div>
  );
};

export default Avatar;