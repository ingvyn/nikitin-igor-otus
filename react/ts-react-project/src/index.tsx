import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div>
        <input
          type="text"
          width="170"
          name="location"
          placeholder={'Type a new item for todo list... '}
        />
        <button style={{ margin: '10px' }}>Add Todo</button>
      </div>
      <div>
        <span>Show:</span>
        <button disabled style={{ marginLeft: '10px' }}>
          All
        </button>
        <button style={{ marginLeft: '10px' }}>Active</button>
        <button style={{ marginLeft: '10px' }}>Completed</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
