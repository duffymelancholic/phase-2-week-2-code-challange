import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ background: '#eee', borderRadius: '8px', height: '16px', width: '100%' }}>
      <div
        style={{
          width: `${progress}%`,
          background: '#4caf50',
          height: '100%',
          borderRadius: '8px',
          transition: 'width 0.3s',
        }}
      />
    </div>
  );
};

export default ProgressBar; 