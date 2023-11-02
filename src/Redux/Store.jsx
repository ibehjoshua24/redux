import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./ToDoSilce"

const Store = configureStore ({
  reducer: {
    todos: todosReducer,
  },
});

export default Store