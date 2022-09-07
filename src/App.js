import className from 'classnames/bind';

import styles from './App.module.scss'
import AddJob from './components/addJob/AddJob';
import List from '~/components/list/List';
import { useState } from 'react';

const cx=className.bind(styles)

function App() {
  const [todos, setTodos] = useState([]) 
    
  const callbackFunction = (data) => {
    setTodos(data)
  }
  todos.forEach(todo => {
    console.log(todo.isChecked)
  })
  console.log(todos)
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>TODO LIST</h1>
        <AddJob callbackFunction={callbackFunction} todos={todos} setTodos={setTodos}/>
        <List todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
