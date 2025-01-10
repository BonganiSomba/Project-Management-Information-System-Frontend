import React from 'react';
import { BarChart3, Users, AlertTriangle, CheckCircle, MessageSquare, Send } from 'lucide-react';

const stats = [
  {
    label: 'Active Projects',
    value: '12',
    change: '+2',
    icon: BarChart3,
    color: 'blue',
  },
  {
    label: 'Team Members',
    value: '24',
    change: '+4',
    icon: Users,
    color: 'green',
  },
  {
    label: 'Open Risks',
    value: '7',
    change: '-2',
    icon: AlertTriangle,
    color: 'yellow',
  },
  {
    label: 'Completed Tasks',
    value: '128',
    change: '+12',
    icon: CheckCircle,
    color: 'indigo',
  },
];

const chatMessages = [
  {
    id: 1,
    user: 'Jane Smith',
    message: 'Updated the design mockups for the client review',
    time: '2:30 PM',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    id: 2,
    user: 'John Doe',
    message: "Great work! I'll review them this afternoon",
    time: '2:35 PM',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
  {
    id: 3,
    user: 'Sarah Wilson',
    message: "Don't forget we have the client meeting at 4 PM",
    time: '2:40 PM',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            New Project
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Project Progress</h2>
          <div className="space-y-4">
            {/* Project progress bars */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Website Redesign</span>
                <span className="text-sm text-gray-500">75%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Mobile App Development</span>
                <span className="text-sm text-gray-500">45%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Marketing Campaign</span>
                <span className="text-sm text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Team Chat
            </h2>
          </div>
          
          <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[400px]">
            {chatMessages.map((message) => (
              <div key={message.id} className="flex items-start gap-3">
                <img
                  src={message.avatar}
                  alt={message.user}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{message.user}</span>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{message.message}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t mt-auto">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}