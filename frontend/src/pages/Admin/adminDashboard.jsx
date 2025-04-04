import React, { useState } from 'react';
import Leftpannel from './components/Leftpannel';
import RightPannel from './components/RightPannel';

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('');

  return (
    <div className="flex h-screen">
      <Leftpannel setActiveMenu={setActiveMenu} />
      <RightPannel activeMenu={activeMenu} />
    </div>
  );
};

export default AdminDashboard;