import React from 'react';

function Profile(props) {
  const { accessRight, username } = props
  return (
    <div className='profile-page'>
        <h1>{username}</h1>
        <p>access right: {accessRight}</p>
    </div>
  );
}

export default Profile;