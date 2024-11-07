import React from 'react';

const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-columns">
        <div className="column">
          <h3>🗂️ Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>
        <div className="column">
          <h3>✅ Completed Tasks</h3>
          <p>{completedTasks}</p>
        </div>
        <div className="column">
          <h3>⏳ Pending Tasks</h3>
          <p>{pendingTasks}</p>
        </div>
        <div className="column">
          <h3>📊 Task Overview</h3>
          <p>{pendingTasks > 0 ? 'You have pending tasks!' : 'All tasks are completed!'}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
