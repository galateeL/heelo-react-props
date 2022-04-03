import React from 'react';

const Avatar = (props) => {
  return (
    <div>
      <img src={props.simpson.avatar}/>
      <h4>{props.simpson.firstName}</h4>
      <h4>{props.simpson.lastName.toUpperCase()}</h4>
    </div>
  );
};

export default Avatar;