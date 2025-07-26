import React, { useEffect, useState } from 'react';
import Overview from './components/Overview';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import DepositForm from './components/DepositForm';
import { fetchGoals, addGoal, updateGoal, deleteGoal } from './api/goals';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchGoals()
      .then(data => {
        setGoals(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch goals');
        setLoading(false);
      });
  }, []);

  const handleAddGoal = async (goal) => {
    const newGoal = await addGoal(goal);
    setGoals(prev => [...prev, newGoal]);
  };

  const handleUpdateGoal = async (id, updates) => {
    const updated = await updateGoal(id, updates);
    setGoals(prev => prev.map(g => g.id === id ? updated : g));
  };

  const handleDeleteGoal = async (id) => {
    await deleteGoal(id);
    setGoals(prev => prev.filter(g => g.id !== id));
  };

  const handleDeposit = async (id, amount) => {
    const goal = goals.find(g => g.id === id);
    if (!goal) return;
    const updated = await updateGoal(id, { savedAmount: Number(goal.savedAmount) + Number(amount) });
    setGoals(prev => prev.map(g => g.id === id ? updated : g));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="app-container">
      <h1>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAddGoal={handleAddGoal} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />
      <GoalList goals={goals} onUpdateGoal={handleUpdateGoal} onDeleteGoal={handleDeleteGoal} />
    </div>
  );
}

export default App;
