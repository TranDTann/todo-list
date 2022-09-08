import className from 'classnames/bind'
import {useState } from "react";

import styles from './Tab.module.scss'
import List from '../list/List';

const cx=className.bind(styles)

const tabs=[{id:1, title:'All'}, {id: 2, title:'Completed'}, {id: 3, title:'UnCompleted'}]

function Tab({todos, setTodos}) {
    const [currTab, setCurrTab] = useState(1)

    const handleTab =(id) => {     
        setCurrTab(id)
    }

    const getData = () => {
        switch(currTab) {
            case 1: {
              return  todos
            }
            case 2: {
              return   todos.filter(item => item.isChecked)  
            }
            case 3: {
                return todos.filter(item => !item.isChecked)
            }  
            default: 
            break;
        }
    }

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('list-tab')}>
                {tabs.map(tab => (
                    <button onClick={() => handleTab(tab.id)} className={cx('btn-tab')}>{tab.title}</button>
                ))}
            </div>
            <List data={getData()} setTodos={setTodos} todos={todos}/>
        </div>
     );
}

export default Tab;