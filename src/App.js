import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashboard';
import Financeiro from './Financeiro';
import Atendimentos from './Atendimentos';
import Profissionais from './Profissionais';
import Servicos from './Servicos';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Renderizar a página atual
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onPageChange={handlePageChange} />;
      case 'financeiro':
        return <Financeiro onPageChange={handlePageChange} />;
      case 'atendimentos':
        return <Atendimentos onPageChange={handlePageChange} />;
      case 'profissionais':
        return <Profissionais onPageChange={handlePageChange} />;
      case 'servicos':
        return <Servicos onPageChange={handlePageChange} />;
      default:
        return <Dashboard onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
}

export default App;