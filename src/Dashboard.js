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
  User
} from 'lucide-react';

const Dashboard = ({ onPageChange }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('Nov 2024 - Dez 2024');

  // Dados dos cards principais
  const mainStats = [
    {
      title: 'Agendados',
      value: '30',
      change: '+25%',
      trend: 'up',
      icon: Calendar,
      color: 'text-blue-500'
    },
    {
      title: 'Atendidos',
      value: '30',
      change: '+15%',
      trend: 'up',
      icon: Users,
      color: 'text-green-500'
    },
    {
      title: 'Média',
      value: '30',
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-500'
    }
  ];

  // Dados do gráfico semanal
  const weeklyData = [
    { day: 'Seg', value: 25 },
    { day: 'Ter', value: 45 },
    { day: 'Qua', value: 35 },
    { day: 'Qui', value: 50 },
    { day: 'Sex', value: 40 },
    { day: 'Sáb', value: 20 }
  ];

  // Dados dos agendamentos
  const appointments = [
    {
      id: 1,
      time: '10h',
      client: 'Joao',
      phone: '0800',
      professional: 'xxxx',
      service: 'Corte e barba',
      status: 'pending'
    },
    {
      id: 2,
      time: '10h',
      client: 'Marcelo',
      phone: '0800',
      professional: 'xxxx',
      service: 'Corte e barba',
      status: 'pending'
    },
    {
      id: 3,
      time: '10h',
      client: 'Vitor',
      phone: '0800',
      professional: 'xxxx',
      service: 'Corte',
      status: 'pending'
    },
    {
      id: 4,
      time: '10h',
      client: 'Wandin',
      phone: '0800',
      professional: 'xxxx',
      service: 'Corte',
      status: 'pending'
    }
  ];

  // Dados dos serviços
  const services = [
    {
      name: 'Corte',
      appointments: 10,
      revenue: 'R$ 600,00',
      percentage: 0,
      color: 'bg-yellow-500'
    },
    {
      name: 'Barba',
      appointments: 15,
      revenue: 'R$ 600,00',
      percentage: 0,
      color: 'bg-blue-500'
    },
    {
      name: 'Sobrancelha',
      appointments: 5,
      revenue: 'R$ 75,00',
      percentage: 0,
      color: 'bg-green-500'
    }
  ];

  // Menu lateral
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true, page: 'dashboard' },
    { icon: DollarSign, label: 'Financeiro', active: false, page: 'financeiro' },
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
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-400">Dados gerais sobre os atendimentos</p>
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
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
              <Download className="w-4 h-4" />
              <span>Download</span>
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
                  <p className="text-3xl font-bold">{stat.value}</p>
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

        {/* Charts and Appointments */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Weekly Chart */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Atendimentos da semana</h3>
            <div className="flex items-end justify-between space-x-3 h-48 px-4">
              {weeklyData.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="relative w-full flex items-end justify-center mb-2">
                    <div className="text-xs text-gray-400 mb-1">{item.value}</div>
                  </div>
                  <div 
                    className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-300 hover:from-blue-400 hover:to-blue-300"
                    style={{ height: `${Math.max((item.value / 60) * 180, 20)}px` }}
                  ></div>
                  <p className="text-gray-400 text-sm mt-3 font-medium">{item.day}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Total da semana:</span>
                <span className="text-white font-semibold">
                  {weeklyData.reduce((sum, item) => sum + item.value, 0)} atendimentos
                </span>
              </div>
            </div>
          </div>

          {/* Appointments List */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Atendimentos</h3>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="relative">
                  {/* Indicador de status no lado esquerdo */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 rounded-l-lg"></div>
                  
                  <div className="bg-gray-700 rounded-lg p-4 ml-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="font-semibold text-lg">{appointment.client}</p>
                        <p className="text-sm text-gray-400">{appointment.phone}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-white">{appointment.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Profissional: {appointment.professional}</span>
                      <span>Serviços: {appointment.service}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Details */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Detalhamento de serviços</h3>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${service.color}`}></div>
                  <div>
                    <p className="font-semibold">{service.name}</p>
                    <p className="text-sm text-gray-400">{service.appointments} agendamentos</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">{service.revenue}</p>
                  <p className="text-sm text-gray-400">{service.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;