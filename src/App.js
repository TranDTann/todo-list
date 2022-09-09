import className from 'classnames/bind';
import { useState } from 'react';

import styles from './App.module.scss'
import AddJob from './components/addJob/AddJob';
import Tab from './components/body/tab/Tab';

const cx=className.bind(styles)

function App() {
  const [todos, setTodos] = useState([]) 

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>TODO LIST</h1>
        <AddJob  todos={todos} setTodos={setTodos}/>
        <Tab todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
