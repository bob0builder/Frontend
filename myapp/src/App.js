import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './contexts/ThemeContext';
import  {store}  from './contexts/redux/store';
import CounterBasic from './components/Counter/CounterBasic';
import ThemeToggler from './components/ThemeToggler';
import TodoApp from './components/TodoApp/TodoApp';
import CounterRedux from './components/Counter/CounterRedux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <h1>React State Management Learning Project</h1>
          
          <section>
            <h2>1. useState Hook</h2>
            <CounterBasic />
          </section>
          
          <section>
            <h2>2. useContext Hook</h2>
            <ThemeToggler />
          </section>
          
          <section>
            <h2>3. useReducer Hook</h2>
            <TodoApp />
          </section>
          
          <section>
            <h2>4. Redux Toolkit</h2>
            <CounterRedux />
          </section>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;