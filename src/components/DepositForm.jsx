import React, { useState } from 'react';

function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goalId || !amount || Number(amount) <= 0) return;
    onDeposit(goalId, amount);
    setGoalId('');
    setAmount('');
  };

  return (
    <form className="deposit-form" onSubmit={handleSubmit} style={{ marginBottom: 32 }}>
      <h2>Make a Deposit</h2>
      <select value={goalId} onChange={e => setGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        min="1"
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm; 