import React, { useState } from 'react';
import { 
  Home, 
  DollarSign, 
  Calendar, 
  Users, 
  Scissors, 
  Clock, 
  Settings, 
  LogOut,
  User
} from 'lucide-react';

const Servicos = ({ onPageChange }) => {
  const [servicos, setServicos] = useState([
    {
      id: 1,
      nome: 'Corte',
      preco: 25.00,
      duracao: '30min',
      descricao: 'Corte de cabelo masculino tradicional',
      ativo: true
    },
    {
      id: 2,
      nome: 'Barba',
      preco: 20.00,
      duracao: '20min',
      descricao: 'Aparar e modelar barba',
      ativo: true
    },
    {
      id: 3,
      nome: 'Sobrancelha',
      preco: 15.00,
      duracao: '15min',
      descricao: 'Design de sobrancelha masculina',
      ativo: true
    },
    {
      id: 4,
      nome: 'Pezinho',
      preco: 10.00,
      duracao: '10min',
      descricao: 'Acabamento na nuca',
      ativo: true
    },
    {
      id: 5,
      nome: 'Selagem',
      preco: 35.00,
      duracao: '45min',
      descricao: 'Selagem de fios',
      ativo: true
    },
    {
      id: 6,
      nome: 'Escova',
      preco: 18.00,
      duracao: '25min',
      descricao: 'Escova modeladora',
      ativo: true
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [novoServico, setNovoServico] = useState({
    nome: '',
    preco: '',
    duracao: '',
    descricao: ''
  });

  // Menu lateral
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: false, page: 'dashboard' },
    { icon: DollarSign, label: 'Financeiro', active: false, page: 'financeiro' },
    { icon: Calendar, label: 'Atendimentos', active: false, page: 'atendimentos' },
    { icon: Users, label: 'Profissionais', active: false, page: 'profissionais' },
    { icon: Scissors, label: 'Serviços', active: true, page: 'servicos' },
    { icon: Settings, label: 'Configurações', active: false, page: 'configuracoes' }
  ];

  const handleMenuClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const handleAddService = () => {
    if (novoServico.nome && novoServico.preco && novoServico.duracao) {
      const newService = {
        id: servicos.length + 1,
        ...novoServico,
        preco: parseFloat(novoServico.preco),
        ativo: true
      };
      setServicos([...servicos, newService]);
      setNovoServico({ nome: '', preco: '', duracao: '', descricao: '' });
      setShowModal(false);
    }
  };

  const toggleServiceStatus = (id) => {
    setServicos(servicos.map(servico => 
      servico.id === id ? { ...servico, ativo: !servico.ativo } : servico
    ));
  };

  const removeService = (id) => {
    setServicos(servicos.filter(servico => servico.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
        {/* User Profile */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">George</h3>
            <p className="text-gray-400 text-sm">MASTER</p>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item.page)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                item.active 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Logout */}
        <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors mt-8">
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Sair</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Serviços</h1>
            <p className="text-gray-400">Gerencie os serviços oferecidos pela barbearia</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            + Adicionar Serviço
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map(servico => (
            <div 
              key={servico.id} 
              className={`bg-gray-800 rounded-lg p-6 border transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                servico.ativo 
                  ? 'border-gray-700 hover:border-blue-500' 
                  : 'border-gray-700 opacity-60'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{servico.nome}</h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => toggleServiceStatus(servico.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      servico.ativo 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                  >
                    {servico.ativo ? '✓' : '○'}
                  </button>
                  <button 
                    onClick={() => removeService(servico.id)}
                    className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center text-lg font-bold transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Preço:</span>
                  <span className="text-white font-semibold">R$ {servico.preco.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Duração:</span>
                  <span className="text-white font-semibold">{servico.duracao}</span>
                </div>
                {servico.descricao && (
                  <div className="mt-3">
                    <span className="text-gray-400 text-sm block mb-1">Descrição:</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{servico.descricao}</p>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                  servico.ativo 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {servico.ativo ? 'Ativo' : 'Inativo'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para adicionar serviço */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">Adicionar Novo Serviço</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white text-2xl transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Nome do Serviço</label>
                <input
                  type="text"
                  value={novoServico.nome}
                  onChange={(e) => setNovoServico({...novoServico, nome: e.target.value})}
                  placeholder="Ex: Corte de cabelo"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Preço (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={novoServico.preco}
                    onChange={(e) => setNovoServico({...novoServico, preco: e.target.value})}
                    placeholder="25.00"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Duração</label>
                  <input
                    type="text"
                    value={novoServico.duracao}
                    onChange={(e) => setNovoServico({...novoServico, duracao: e.target.value})}
                    placeholder="30min"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Descrição (opcional)</label>
                <textarea
                  value={novoServico.descricao}
                  onChange={(e) => setNovoServico({...novoServico, descricao: e.target.value})}
                  placeholder="Descrição do serviço..."
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-700">
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={handleAddService}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Salvar Serviço
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Servicos;