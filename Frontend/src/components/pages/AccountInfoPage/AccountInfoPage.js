// AccountInfoPage.js
import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import UserDashboardTemplate from '../../templates/UserDashboardTemplate/UserDashboardTemplate';

const AccountInfoPage = ({ user, onLogout, onSearch, featuredProducts }) => {
  return (
    <MainTemplate user={user} onLogout={onLogout} onSearch={onSearch}>
      <UserDashboardTemplate user={user} featuredProducts={featuredProducts} />
    </MainTemplate>
  );
};

export default AccountInfoPage;
