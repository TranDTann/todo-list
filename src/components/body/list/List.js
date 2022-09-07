import className from 'classnames/bind'

import styles from './List.module.scss'
import DeleteJob from '../../deleteJob/DeleteJob'

const cx=className.bind(styles)

function  List({data, setTodos, todos}) {
    const handleCheck = (id) => {
        let checkedList = [...todos];
       let index = checkedList.findIndex(item => item.id === id);
        checkedList[index].isChecked = !checkedList[index].isChecked;
        setTodos(checkedList);
    }

    const handleClearAll = () => {
        setTodos([])
    }
    return ( 
        <div>
            {data.map((todo, index) => (
                <div className={cx('job-item')}>
                    <input checked={todo.isChecked} type = 'checkbox' onChange={() => handleCheck(todo.id)}/>
                    <li key={index}>{todo.name}</li>
                    <DeleteJob setTodos={setTodos} todo={todo}/>
                </div>
                
            ))}
            {data.length>0 && <button onClick={() =>handleClearAll}>Clear All</button>}
        </div>
     );
}

export default List ;