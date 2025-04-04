import React from 'react';
import StudentData from './studentData';

const RightPannel = ({ activeMenu }) => {
  const renderContent = () => {
    switch (activeMenu) {
      case 'students':
        return  <div className="bg-white p-6 rounded-lg shadow">Student Management Panel <StudentData/> </div>;
      case 'faculty':
        return <div className="bg-white p-6 rounded-lg shadow">Faculty Management Panel</div>;
      case 'courses':
        return <div className="bg-white p-6 rounded-lg shadow">Course Management Panel</div>;
      case 'settings':
        return <div className="bg-white p-6 rounded-lg shadow">Settings Panel</div>;
      default:
        return <div className="bg-white p-6 rounded-lg shadow">Welcome to Admin Dashboard</div>;
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-100">
      {renderContent()}
    </div>
  );
};

export default RightPannel;