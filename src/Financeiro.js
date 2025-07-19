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
  Download,
  TrendingUp,
  TrendingDown,
  User,
  CreditCard,
  Wallet,
  PiggyBank,
  Receipt,
  ArrowUpCircle,
  ArrowDownCircle,
  Filter,
  Search,
  Eye,
  Plus
} from 'lucide-react';

const Financeiro = ({ onPageChange }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('Nov 2024 - Dez 2024');
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Dados dos cards principais
  const mainStats = [
    {
      title: 'Receita Total',
      value: 'R$ 12.450,00',
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-500'
    },
    {
      title: 'Gastos',
      value: 'R$ 3.200,00',
      change: '+5%',
      trend: 'up',
      icon: ArrowDownCircle,
      color: 'text-red-500'
    },
    {
      title: 'Lucro Líquido',
      value: 'R$ 9.250,00',
      change: '+22%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-blue-500'
    },
  ];

  // Dados do gráfico de receita mensal
  const monthlyRevenue = [
    { month: 'Jan', value: 8500 },
    { month: 'Fev', value: 9200 },
    { month: 'Mar', value: 10100 },
    { month: 'Abr', value: 9800 },
    { month: 'Mai', value: 11200 },
    { month: 'Jun', value: 12450 }
  ];

  // Dados das transações
  const transactions = [
    {
      id: 1,
      type: 'entrada',
      description: 'Corte + Barba - João Silva',
      amount: 80.00,
      date: '09/12/2024',
      time: '14:30',
      method: 'Cartão',
      professional: 'George'
    },
    {
      id: 2,
      type: 'entrada',
      description: 'Corte - Marcelo Santos',
      amount: 60.00,
      date: '09/12/2024',
      time: '15:00',
      method: 'Dinheiro',
      professional: 'Carlos'
    },
    {
      id: 3,
      type: 'saida',
      description: 'Produtos - Fornecedor ABC',
      amount: 350.00,
      date: '08/12/2024',
      time: '10:00',
      method: 'Transferência',
      professional: 'Admin'
    },
    {
      id: 4,
      type: 'entrada',
      description: 'Sobrancelha - Ana Costa',
      amount: 25.00,
      date: '08/12/2024',
      time: '16:20',
      method: 'PIX',
      professional: 'Maria'
    },
    {
      id: 5,
      type: 'saida',
      description: 'Aluguel - Dezembro',
      amount: 1200.00,
      date: '01/12/2024',
      time: '09:00',
      method: 'Transferência',
      professional: 'Admin'
    }
  ];

  // Dados dos métodos de pagamento
  const paymentMethods = [
    { method: 'Cartão', amount: 6800, percentage: 55, color: 'bg-blue-500' },
    { method: 'Dinheiro', amount: 3200, percentage: 26, color: 'bg-green-500' },
    { method: 'PIX', amount: 2000, percentage: 16, color: 'bg-purple-500' },
    { method: 'Transferência', amount: 450, percentage: 3, color: 'bg-yellow-500' }
  ];

  // Menu lateral
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: false, page: 'dashboard' },
    { icon: DollarSign, label: 'Financeiro', active: true, page: 'financeiro' },
    { icon: Calendar, label: 'Atendimentos', active: false, page: 'atendimentos' },
    { icon: Users, label: 'Profissionais', active: false, page: 'profissionais' },
    { icon: Scissors, label: 'Serviços', active: false, page: 'servicos' },
    { icon: Settings, label: 'Configurações', active: false, page: 'Configurações' }
  ];

  const handleMenuClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  // Filtrar transações
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.professional.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <h1 className="text-3xl font-bold">Financeiro</h1>
            <p className="text-gray-400">Controle financeiro e relatórios</p>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Nov 2024 - Dez 2024</option>
              <option>Out 2024 - Nov 2024</option>
              <option>Set 2024 - Out 2024</option>
            </select>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Nova Transação</span>
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
              <Download className="w-4 h-4" />
              <span>Relatório</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {mainStats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-green-500 text-sm">{stat.change}</span>
                  </div>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'transactions'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Transações
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'payments'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Métodos de Pagamento
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Receita dos últimos 6 meses</h3>
              <div className="flex items-end justify-between space-x-3 h-48 px-4">
                {monthlyRevenue.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className="relative w-full flex items-end justify-center mb-2">
                      <div className="text-xs text-gray-100 mb-1">
                        R$ {(item.value / 1000).toFixed(1)}k
                      </div>
                    </div>
                    <div 
                      className="w-12 bg-gradient-to-t from-blue-500 to-blue-500 rounded-t-lg transition-all duration-300 hover:from-blue-500 hover:to-blue-400"
                      style={{ height: `${Math.max((item.value / 15000) * 180, 20)}px` }}
                    ></div>
                    <p className="text-gray-400 text-sm mt-3 font-medium">{item.month}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Resumo Rápido</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <ArrowUpCircle className="w-5 h-5 text-green-500" />
                    <span>Entradas hoje</span>
                  </div>
                  <span className="text-green-500 font-semibold">R$ 520,00</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <ArrowDownCircle className="w-5 h-5 text-red-500" />
                    <span>Saídas hoje</span>
                  </div>
                  <span className="text-red-500 font-semibold">R$ 120,00</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Wallet className="w-5 h-5 text-blue-500" />
                    <span>Saldo do dia</span>
                  </div>
                  <span className="text-blue-500 font-semibold">R$ 400,00</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <PiggyBank className="w-5 h-5 text-purple-500" />
                    <span>Meta mensal</span>
                  </div>
                  <span className="text-purple-500 font-semibold">85%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="bg-gray-800 rounded-lg p-6">
            {/* Search and Filter */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar transações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white hover:bg-gray-600 transition-colors flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filtros</span>
              </button>
            </div>

            {/* Transactions List */}
            <div className="space-y-3">
              {filteredTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'entrada' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {transaction.type === 'entrada' ? (
                        <ArrowUpCircle className="w-5 h-5 text-white" />
                      ) : (
                        <ArrowDownCircle className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{transaction.description}</p>
                      <p className="text-sm text-gray-400">
                        {transaction.professional} • {transaction.date} às {transaction.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className={`font-bold ${
                        transaction.type === 'entrada' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {transaction.type === 'entrada' ? '+' : '-'}R$ {transaction.amount.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-400">{transaction.method}</p>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Métodos de Pagamento</h3>
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${method.color}`}></div>
                    <div>
                      <p className="font-semibold">{method.method}</p>
                      <p className="text-sm text-gray-400">{method.percentage}% do total</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">R$ {method.amount.toLocaleString()}</p>
                    <div className="w-32 bg-gray-600 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 rounded-full ${method.color}`}
                        style={{ width: `${method.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Financeiro;