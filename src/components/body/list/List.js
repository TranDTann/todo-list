import className from 'classnames/bind'
import { useEffect, useState } from 'react'

import DeleteJob from '../../deleteJob/DeleteJob'
import styles from './List.module.scss'

const cx=className.bind(styles)

function  List({data, setTodos, todos}) {
    const [arr, setArr] = useState([])

    useEffect(()=>{
        setArr(data)
    }, [data])

    const handleCheck = (id) => {
        let checkedList = [...todos];
       let index = checkedList.findIndex(item => item.id === id);
        checkedList[index].isChecked = !checkedList[index].isChecked;
        setTodos(checkedList);
    }

    const handleClearAll = () => {
        setArr([])
        arr.forEach(item => {
            setTodos(prev => {
                return prev.filter(todo => todo !== item)
            })
        })
    }

    return ( 
        <div className= {cx('job-list')}>
                    {arr.length>0 && <button className={cx('btn-clear-all')} onClick={handleClearAll}>Clear All</button>}
            {arr.map((todo, index) => (
                <div className={cx('job-item')}>
                    <input className={cx('check-box')} checked={todo.isChecked} type = 'checkbox' onChange={() => handleCheck(todo.id)}/>
                    <input
                        className={cx('desc-job')}
                        key={index} 
                        readOnly 
                        value= {todo.isChecked ? 
                        <del >{todo.name}</del> 
                        : todo.name}  >
                    </input>
                        {/* {todo.isChecked && <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />} */}
                    <DeleteJob setTodos={setTodos} todo={todo}/>
                </div>   
                ))}
        </div>
     );
}

export default List ;