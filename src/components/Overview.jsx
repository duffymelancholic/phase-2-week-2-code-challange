import React from 'react';

function daysLeft(deadline) {
  const now = new Date();
  const end = new Date(deadline);
  return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
}

function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const completedGoals = goals.filter(g => Number(g.savedAmount) >= Number(g.targetAmount)).length;

  return (
    <div className="overview">
      <h2>Overview</h2>
      <div>Total Goals: {totalGoals}</div>
      <div>Total Saved: ${totalSaved.toLocaleString()}</div>
      <div>Goals Completed: {completedGoals}</div>
      <ul>
        {goals.map(goal => {
          const complete = Number(goal.savedAmount) >= Number(goal.targetAmount);
          const left = daysLeft(goal.deadline);
          let status = '';
          if (!complete && left < 0) status = 'Overdue';
          else if (!complete && left <= 30) status = '⚠️ Deadline soon';
          else if (complete) status = '✅ Completed';
          return (
            <li key={goal.id} className={!complete && left < 0 ? 'overdue' : ''}>
              <strong>{goal.name}</strong> —
              {complete ? ' Goal met!' : ` $${goal.savedAmount} / $${goal.targetAmount}`}
              {status && <span style={{ marginLeft: 8 }}>{status}</span>}
              {!complete && left >= 0 && (
                <span style={{ marginLeft: 8 }}>
                  ({left} day{left !== 1 ? 's' : ''} left)
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Overview; 