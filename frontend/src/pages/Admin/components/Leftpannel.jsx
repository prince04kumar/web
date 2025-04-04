import React from 'react';
import { Link } from 'react-router-dom';

const Leftpannel = ({ setActiveMenu }) => {
  const menuItems = [
    { title: 'Students', id: 'students' },
    { title: 'Faculty', id: 'faculty' },
    { title: 'Courses', id: 'courses' },
    { title: 'Settings', id: 'settings' }
  ];

  return (
    <div className="w-64 bg-slate-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-8 text-center">Admin Dashboard</h2>
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="py-3 px-4 cursor-pointer transition-colors hover:bg-slate-700 mb-2 rounded-lg"
            onClick={() => setActiveMenu(item.id)}
          >
            {item.title}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Leftpannel;