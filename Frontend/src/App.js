// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage';
import HomePage from './components/pages/HomePage/HomePage.1';
import BlogPage from './components/pages/BlogPage/BlogPage';
import AccountInfoPage from './components/pages/AccountInfoPage/AccountInfoPage';
import CarSellingPage from './components/pages/CarSellingPage/CarSellingPage';
import CarDetailsPage from './components/pages/CarDetailsPage/CarDetailsPage';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Encabezado, pie de página o elementos comunes a todas las páginas podrían ir aquí */}
        <Switch>
          <Route path="/login" components={LoginPage} />
          <Route path="/register" components={RegistrationPage} />
          <Route path="/home" components={HomePage} />
          <Route path="/blog" components={BlogPage} />
          <Route path="/account" components={AccountInfoPage} />
          <Route path="/sell-car" components={CarSellingPage} />
          <Route path="/car-details/:id" components={CarDetailsPage} />
          {/* Otras rutas pueden agregarse según sea necesario */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
