import className from 'classnames/bind'
import { useState } from "react";

import styles from './List.module.scss'
import DeleteJob from "../deleteJob/DeleteJob";

const cx=className.bind(styles)

const tabs=[{id:1, title:'All'}, {id: 2, title:'Completed'}, {id: 3, title:'UnCompleted'}]

function List({todos, setTodos}) {
    var [data, setData] = useState([...todos])
    const [type, setType] = useState('All')
    

    const handleCheck = (todo) => {
        setTodos(prev => {
            prev.forEach(item => {
                if(item.id === todo.id) {
                    item.isChecked = true
                 }
            })
            return [...prev]
        })
    }
    const handleTab =(tab) => {
        setType(tab)

        switch(tab.id) {
            case 1: {
                setData(todos)
                break;
            }
            case 2: {
                setData(todos => {
                    return todos.filter(todo => todo.isChecked === true)
                })
                break;
            }
            case 3: {
                setData(todos => {
                    return todos.filter(todo => todo.isChecked === false)
                })
                break;
            }  
                
        }
    }
console.log(data)
    return ( 
        <div>
            {tabs.map(tab => (
                <button onClick={() => handleTab(tab)}>{tab.title}</button>
            ))}
            {data.map((todo, index) => (
                <div className={cx('job-item')}>
                    <input type = 'checkbox' onChange={() => handleCheck(todo)}/>
                    <li key={index}>{todo.name}</li>
                    <DeleteJob setTodos={setTodos} todo={todo}/>
                </div>
                
            ))}
        </div>
     );
}

export default List;