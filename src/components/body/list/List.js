import className from 'classnames/bind'
import { useEffect, useState } from 'react'

import Item from './item/Item'
import styles from './List.module.scss'

const cx=className.bind(styles)

function  List({data, setTodos, todos}) {
    const [arr, setArr] = useState([])
    
    useEffect(()=>{
        setArr(data)
    }, [data])

    const handleClearAll = () => {
        arr.forEach(item => {
            setTodos(prev => {
                return prev.filter(todo => todo !== item)
            })
        })
        setArr([])
    }
    
    return ( 
        <div className= {cx('job-list')}>
            {data.length>0 && <button className={cx('btn-clear-all')} onClick={handleClearAll}>Clear All</button>}
            {data.map((todo, index) => (
                <Item todo={todo} todos={todos} setTodos={setTodos} />
                ))}
        </div>
     );
}

export default List ;