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
  Phone,
  Mail,
  Star,
  MoreHorizontal,
  Badge,
  MapPin,
  Award,
  TrendingUp,
  CalendarDays,
  CheckCircle,
  XCircle,
  AlertCircle,
  UserPlus,
  Camera
} from 'lucide-react';

const Profissionais = ({ onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');
  const [activeTab, setActiveTab] = useState('lista');

  // Dados dos profissionais
  const profissionais = [
    {
      id: 1,
      nome: 'Barbeiro1',
      email: 'xxx@barbearia.com',
      telefone: '(38) 99999-1111',
      cargo: 'Barbeiro Master',
      especialidades: ['Corte Masculino', 'Barba'],
      foto: 'B1',
      status: 'ativo',
      dataAdmissao: '2020-01-15',
      comissao: 60,
      avaliacaoMedia: 4.8,
      totalAtendimentos: 1250,
      receitaTotal: 78500.00,
      receitaMes: 6800.00,
      clientesFidelizados: 45,
      horarioTrabalho: '08:00 - 18:00',
      diasTrabalho: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      observacoes: 'Profissional experiente e muito popular entre os clientes'
    },
    {
      id: 2,
      nome: 'Esteticista1',
      email: 'xxx@barbearia.com',
      telefone: '(38) 88888-2222',
      cargo: 'Esteticista',
      especialidades: ['Sobrancelha', 'Design', 'Depilação'],
      foto: 'E1',
      status: 'ativo',
      dataAdmissao: '2021-03-20',
      comissao: 55,
      avaliacaoMedia: 4.9,
      totalAtendimentos: 890,
      receitaTotal: 34200.00,
      receitaMes: 3400.00,
      clientesFidelizados: 38,
      horarioTrabalho: '09:00 - 17:00',
      diasTrabalho: ['Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      observacoes: 'Especialista em design de sobrancelhas'
    },
    {
      id: 3,
      nome: 'Barbeiro2',
      email: 'xxx@barbearia.com',
      telefone: '(38) 77777-3333',
      cargo: 'Barbeiro',
      especialidades: ['Corte Masculino', 'Barba'],
      foto: 'B2',
      status: 'ativo',
      dataAdmissao: '2022-06-10',
      comissao: 50,
      avaliacaoMedia: 4.6,
      totalAtendimentos: 445,
      receitaTotal: 22250.00,
      receitaMes: 2800.00,
      clientesFidelizados: 28,
      horarioTrabalho: '10:00 - 19:00',
      diasTrabalho: ['Seg', 'Qua', 'Qui', 'Sex', 'Sab'],
      observacoes: 'Profissional dedicado e em crescimento'
    },
    {
      id: 4,
      nome: 'Cabeleireira1',
      email: 'xxx@barbearia.com',
      telefone: '(38) 66666-4444',
      cargo: 'Cabeleireira',
      especialidades: ['Corte Feminino', 'Coloração', 'Escova'],
      foto: 'C1',
      status: 'inativo',
      dataAdmissao: '2019-11-05',
      comissao: 65,
      avaliacaoMedia: 4.7,
      totalAtendimentos: 1680,
      receitaTotal: 126000.00,
      receitaMes: 0.00,
      clientesFidelizados: 62,
      horarioTrabalho: '08:00 - 16:00',
      diasTrabalho: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
      observacoes: 'Profissional de férias até janeiro'
    },
    {
      id: 5,
      nome: 'Barbeiro3',
      email: 'xxx@barbearia.com',
      telefone: '(38) 55555-5555',
      cargo: 'Barbeiro Júnior',
      especialidades: ['Corte Masculino'],
      foto: 'B3',
      status: 'ativo',
      dataAdmissao: '2024-01-20',
      comissao: 40,
      avaliacaoMedia: 4.3,
      totalAtendimentos: 156,
      receitaTotal: 7800.00,
      receitaMes: 1200.00,
      clientesFidelizados: 12,
      horarioTrabalho: '09:00 - 17:00',
      diasTrabalho: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
      observacoes: 'Novo profissional em treinamento'
    }
  ];

  // Estatísticas gerais
  const estatisticasGerais = {
    totalProfissionais: profissionais.length,
    profissionaisAtivos: profissionais.filter(p => p.status === 'ativo').length,
    profissionaisInativos: profissionais.filter(p => p.status === 'inativo').length,
    receitaTotalMes: profissionais.reduce((acc, curr) => acc + curr.receitaMes, 0),
    avaliacaoMediaGeral: (profissionais.reduce((acc, curr) => acc + curr.avaliacaoMedia, 0) / profissionais.length).toFixed(1)
  };

  // Menu lateral
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: false, page: 'dashboard' },
    { icon: DollarSign, label: 'Financeiro', active: false, page: 'financeiro' },
    { icon: Calendar, label: 'Atendimentos', active: false, page: 'atendimentos' },
    { icon: Users, label: 'Profissionais', active: true, page: 'profissionais' },
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
      case 'ativo': return 'bg-green-500';
      case 'inativo': return 'bg-red-500';
      case 'ferias': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  // Função para obter texto do status
  const getStatusText = (status) => {
    switch (status) {
      case 'ativo': return 'Ativo';
      case 'inativo': return 'Inativo';
      case 'ferias': return 'Férias';
      default: return 'Desconhecido';
    }
  };

  // Filtrar profissionais
  const filteredProfissionais = profissionais.filter(profissional => {
    const matchesSearch = profissional.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profissional.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profissional.cargo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'todos' || profissional.status === statusFilter;
    
    return matchesSearch && matchesStatus;
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
            <h1 className="text-3xl font-bold">Profissionais</h1>
            <p className="text-gray-400">Gerencie a equipe de profissionais</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
              <UserPlus className="w-4 h-4" />
              <span>Novo Profissional</span>
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-gray-400 text-sm">Total</p>
                <p className="text-2xl font-bold">{estatisticasGerais.totalProfissionais}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-gray-400 text-sm">Ativos</p>
                <p className="text-2xl font-bold">{estatisticasGerais.profissionaisAtivos}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <XCircle className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-gray-400 text-sm">Inativos</p>
                <p className="text-2xl font-bold">{estatisticasGerais.profissionaisInativos}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-gray-400 text-sm">Receita Mês</p>
                <p className="text-lg font-bold">R$ {estatisticasGerais.receitaTotalMes.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-gray-400 text-sm">Avaliação</p>
                <p className="text-2xl font-bold">{estatisticasGerais.avaliacaoMediaGeral}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('lista')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'lista'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Lista de Profissionais
          </button>
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'performance'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Performance
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar por nome, email ou cargo..."
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
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="ferias">Férias</option>
          </select>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'lista' && (
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="space-y-4">
              {filteredProfissionais.map((profissional) => (
                <div key={profissional.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{profissional.foto}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="font-semibold text-xl">{profissional.nome}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(profissional.status)}`}>
                          {getStatusText(profissional.status)}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-1">{profissional.cargo}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <span className="flex items-center space-x-1">
                          <Phone className="w-4 h-4" />
                          <span>{profissional.telefone}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Mail className="w-4 h-4" />
                          <span>{profissional.email}</span>
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {profissional.especialidades.map((especialidade, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                            {especialidade}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Avaliação</p>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-bold">{profissional.avaliacaoMedia}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Atendimentos</p>
                      <p className="font-bold">{profissional.totalAtendimentos}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Receita Mês</p>
                      <p className="font-bold text-green-500">R$ {profissional.receitaMes.toFixed(2)}</p>
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
            
            {filteredProfissionais.length === 0 && (
              <div className="text-center py-12">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Nenhum profissional encontrado</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Top Profissionais - Receita</h3>
              <div className="space-y-4">
                {profissionais
                  .sort((a, b) => b.receitaMes - a.receitaMes)
                  .slice(0, 5)
                  .map((profissional, index) => (
                    <div key={profissional.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">{profissional.foto}</span>
                        </div>
                        <div>
                          <p className="font-semibold">{profissional.nome}</p>
                          <p className="text-sm text-gray-400">{profissional.cargo}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-500">R$ {profissional.receitaMes.toFixed(2)}</p>
                        <p className="text-sm text-gray-400">#{index + 1}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Top Profissionais - Avaliação</h3>
              <div className="space-y-4">
                {profissionais
                  .sort((a, b) => b.avaliacaoMedia - a.avaliacaoMedia)
                  .slice(0, 5)
                  .map((profissional, index) => (
                    <div key={profissional.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">{profissional.foto}</span>
                        </div>
                        <div>
                          <p className="font-semibold">{profissional.nome}</p>
                          <p className="text-sm text-gray-400">{profissional.totalAtendimentos} atendimentos</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-bold">{profissional.avaliacaoMedia}</span>
                        </div>
                        <p className="text-sm text-gray-400">#{index + 1}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profissionais;