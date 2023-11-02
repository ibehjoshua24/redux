import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store'; // Import your Redux store
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
