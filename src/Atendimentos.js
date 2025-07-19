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
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  User,
  CalendarDays,
  CheckCircle,
  XCircle,
  AlertCircle,
  MapPin,
  Phone,
  Mail,
  Star,
  MoreHorizontal
} from 'lucide-react';

const Atendimentos = ({ onPageChange }) => {
  const [selectedDate, setSelectedDate] = useState('2024-12-09');
  const [activeTab, setActiveTab] = useState('hoje');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');

  // Dados dos atendimentos
  const atendimentos = [
    {
      id: 1,
      cliente: 'João Silva',
      telefone: '(11) 99999-1234',
      email: 'joao@email.com',
      servico: 'Corte + Barba',
      profissional: 'George',
      data: '2024-12-09',
      horario: '09:00',
      duracao: '45 min',
      valor: 80.00,
      status: 'confirmado',
      observacoes: 'Cliente preferiu corte mais baixo',
      avatar: 'JS'
    },
    {
      id: 2,
      cliente: 'Maria Santos',
      telefone: '(11) 88888-5678',
      email: 'maria@email.com',
      servico: 'Sobrancelha + Design',
      profissional: 'Ana',
      data: '2024-12-09',
      horario: '10:30',
      duracao: '30 min',
      valor: 45.00,
      status: 'em_andamento',
      observacoes: '',
      avatar: 'MS'
    },
    {
      id: 3,
      cliente: 'Carlos Oliveira',
      telefone: '(11) 77777-9999',
      email: 'carlos@email.com',
      servico: 'Corte Masculino',
      profissional: 'George',
      data: '2024-12-09',
      horario: '14:00',
      duracao: '30 min',
      valor: 60.00,
      status: 'agendado',
      observacoes: 'Primeira vez no salão',
      avatar: 'CO'
    },
    {
      id: 4,
      cliente: 'Ana Costa',
      telefone: '(11) 66666-4444',
      email: 'ana@email.com',
      servico: 'Escova + Hidratação',
      profissional: 'Carla',
      data: '2024-12-09',
      horario: '15:30',
      duracao: '60 min',
      valor: 120.00,
      status: 'concluido',
      observacoes: 'Cliente muito satisfeita',
      avatar: 'AC'
    },
    {
      id: 5,
      cliente: 'Pedro Ferreira',
      telefone: '(11) 55555-7777',
      email: 'pedro@email.com',
      servico: 'Barba + Bigode',
      profissional: 'George',
      data: '2024-12-09',
      horario: '16:00',
      duracao: '25 min',
      valor: 40.00,
      status: 'cancelado',
      observacoes: 'Cliente cancelou por motivos pessoais',
      avatar: 'PF'
    },
    {
      id: 6,
      cliente: 'Juliana Lima',
      telefone: '(11) 44444-8888',
      email: 'juliana@email.com',
      servico: 'Corte + Coloração',
      profissional: 'Carla',
      data: '2024-12-10',
      horario: '09:00',
      duracao: '120 min',
      valor: 200.00,
      status: 'agendado',
      observacoes: 'Quer loiro platinado',
      avatar: 'JL'
    }
  ];

  // Estatísticas do dia
  const estatisticasDia = {
    total: atendimentos.filter(a => a.data === selectedDate).length,
    concluidos: atendimentos.filter(a => a.data === selectedDate && a.status === 'concluido').length,
    agendados: atendimentos.filter(a => a.data === selectedDate && a.status === 'agendado').length,
    cancelados: atendimentos.filter(a => a.data === selectedDate && a.status === 'cancelado').length,
    receita: atendimentos.filter(a => a.data === selectedDate && a.status === 'concluido').reduce((acc, curr) => acc + curr.valor, 0)
  };

  // Menu lateral
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: false, page: 'dashboard' },
    { icon: DollarSign, label: 'Financeiro', active: false, page: 'financeiro' },
    { icon: Calendar, label: 'Atendimentos', active: true, page: 'atendimentos' },
    { icon: Users, label: 'Profissionais', active: false, page: 'profissionais' },
    { icon: Scissors, label: 'Serviços', active: false, page: 'servicos' },
    { icon: Settings, label: 'Configurações', active: false, page: 'Configurações' }
  ];

  const handleMenuClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  // Função para obter cor do status
  const getStatusColor = (status) => {
    switch (status) {
      case 'agendado': return 'bg-blue-500';
      case 'confirmado': return 'bg-green-500';
      case 'em_andamento': return 'bg-yellow-500';
      case 'concluido': return 'bg-emerald-500';
      case 'cancelado': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  // Função para obter texto do status
  const getStatusText = (status) => {
    switch (status) {
      case 'agendado': return 'Agendado';
      case 'confirmado': return 'Confirmado';
      case 'em_andamento': return 'Em Andamento';
      case 'concluido': return 'Concluído';
      case 'cancelado': return 'Cancelado';
      default: return 'Desconhecido';
    }
  };

  // Filtrar atendimentos
  const filteredAtendimentos = atendimentos.filter(atendimento => {
    const matchesSearch = atendimento.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         atendimento.profissional.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         atendimento.servico.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'todos' || atendimento.status === statusFilter;
    
    const matchesTab = activeTab === 'todos' || 
                      (activeTab === 'hoje' && atendimento.data === selectedDate) ||
                      (activeTab === 'amanha' && atendimento.data === '2024-12-10');
    
    return matchesSearch && matchesStatus && matchesTab;
  });

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
            <h1 className="text-3xl font-bold">Atendimentos</h1>
            <p className="text-gray-400">Gerencie todos os agendamentos</p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Novo Agendamento</span>
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <CalendarDays className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-gray-400 text-sm">Total Hoje</p>
                <p className="text-2xl font-bold">{estatisticasDia.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-gray-400 text-sm">Concluídos</p>
                <p className="text-2xl font-bold">{estatisticasDia.concluidos}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-gray-400 text-sm">Agendados</p>
                <p className="text-2xl font-bold">{estatisticasDia.agendados}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <XCircle className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-gray-400 text-sm">Cancelados</p>
                <p className="text-2xl font-bold">{estatisticasDia.cancelados}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-gray-400 text-sm">Receita</p>
                <p className="text-lg font-bold">R$ {estatisticasDia.receita.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('hoje')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'hoje'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Hoje
          </button>
          <button
            onClick={() => setActiveTab('amanha')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'amanha'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Amanhã
          </button>
          <button
            onClick={() => setActiveTab('todos')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'todos'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Todos
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar por cliente, profissional ou serviço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todos os Status</option>
            <option value="agendado">Agendado</option>
            <option value="confirmado">Confirmado</option>
            <option value="em_andamento">Em Andamento</option>
            <option value="concluido">Concluído</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>

        {/* Appointments List */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="space-y-4">
            {filteredAtendimentos.map((atendimento) => (
              <div key={atendimento.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{atendimento.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="font-semibold text-lg">{atendimento.cliente}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(atendimento.status)}`}>
                        {getStatusText(atendimento.status)}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-1">{atendimento.servico}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{atendimento.profissional}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{atendimento.horario} ({atendimento.duracao})</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Phone className="w-4 h-4" />
                        <span>{atendimento.telefone}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-green-500 font-bold text-lg">R$ {atendimento.valor.toFixed(2)}</p>
                    <p className="text-gray-400 text-sm">{atendimento.data}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-400 hover:text-blue-300 hover:bg-gray-600 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-green-400 hover:text-green-300 hover:bg-gray-600 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-400 hover:text-red-300 hover:bg-gray-600 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-300 hover:bg-gray-600 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredAtendimentos.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">Nenhum atendimento encontrado</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Atendimentos;