import React from 'react';
import {
  LayoutDashboard,
  Calendar,
  Users,
  AlertTriangle,
  FileText,
  Settings,
  LogOut,
  Briefcase,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Briefcase, label: 'Projects', path: '/projects' },
  { icon: Calendar, label: 'Schedule', path: '/schedule' },
  { icon: Users, label: 'Team', path: '/team' },
  { icon: AlertTriangle, label: 'Risks', path: '/risks' },
  { icon: FileText, label: 'Documents', path: '/documents' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0 flex flex-col">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Briefcase className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold">PMIS</span>
      </div>
      
      <nav className="space-y-1 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-4 mt-4 border-t border-gray-700">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white w-full transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}