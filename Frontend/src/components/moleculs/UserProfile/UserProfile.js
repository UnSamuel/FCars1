// UserProfile.js
import React from 'react';
import PropTypes from 'prop-types';
import StatusIcon from '../../atoms/StatusIcon/StatusIcon';
import './UserProfile.css'; // Importar estilos

const UserProfile = ({ username, status, avatarUrl }) => {
  return (
    <div className="user-profile">
      <img src={avatarUrl} alt={`${username}'s Avatar`} className="avatar" />
      <div className="user-info">
        <h3 className="username">{username}</h3>
        <StatusIcon status={status} />
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['online', 'offline', 'away']).isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default UserProfile;
