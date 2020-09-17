import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { TodosModule } from './todos-module/todo-module-component';

function App() {
  return (
    <Provider store={store}>
    <TodosModule></TodosModule>
    </Provider>
  );
}

export default App;

// heavytruck