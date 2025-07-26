import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function GoalList({ goals, onUpdateGoal, onDeleteGoal }) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (goal) => {
    setEditingId(goal.id);
    setEditData({
      name: goal.name,
      targetAmount: goal.targetAmount,
      category: goal.category,
      deadline: goal.deadline,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    onUpdateGoal(id, editData);
    setEditingId(null);
  };

  return (
    <div className="goal-list">
      <h2>Goals</h2>
      <ul>
        {goals.map((goal) => {
          const progress = Math.min(100, (goal.savedAmount / goal.targetAmount) * 100);
          return (
            <li key={goal.id} className="goal-list-item">
              {editingId === goal.id ? (
                <form onSubmit={(e) => handleEditSubmit(e, goal.id)}>
                  <input name="name" value={editData.name} onChange={handleEditChange} required />
                  <input name="targetAmount" type="number" value={editData.targetAmount} onChange={handleEditChange} required min="1" />
                  <input name="category" value={editData.category} onChange={handleEditChange} required />
                  <input name="deadline" type="date" value={editData.deadline} onChange={handleEditChange} required />
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setEditingId(null)}>Cancel</button>
                </form>
              ) : (
                <>
                  <div><strong>{goal.name}</strong> <span className="goal-category">({goal.category})</span></div>
                  <div>Target: ${goal.targetAmount} | Saved: ${goal.savedAmount}</div>
                  <div>Deadline: {goal.deadline}</div>
                  <ProgressBar progress={progress} />
                  <button onClick={() => startEdit(goal)}>Edit</button>
                  <button onClick={() => onDeleteGoal(goal.id)} className="delete-btn">Delete</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GoalList; 