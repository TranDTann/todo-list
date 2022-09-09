import className from 'classnames/bind'
import { faFloppyDisk, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'

import styles from './Item.module.scss'
import DeleteJob from '~/components/deleteJob/DeleteJob'

const cx=className.bind(styles)

function Item({todo, todos, setTodos}) {
    const [value, setValue] =useState('')

    useEffect(() => {
        setValue(todo)
    }, [todo])

    const [isFocus, setIsFocus] = useState(false)
    const inputRef = useRef()

    const handleCheck = (id) => {
        let checkedList = [...todos];
        let index = checkedList.findIndex(item => item.id === id);
        checkedList[index].isChecked = !checkedList[index].isChecked;
        setTodos(checkedList);
    }

    const handleEdit = () => {
        setIsFocus(!isFocus)
        inputRef.current.readOnly = false
        inputRef.current.focus()
    }

    const handleSave = (id) => {
        setIsFocus(!isFocus)
        let updateTodos = [...todos]
        let index = updateTodos.findIndex(item => item.id === id)
        updateTodos[index].name = value
        setTodos(updateTodos)
        inputRef.current.readOnly = true
    }

    return ( 
            <div className={cx('job-item')} style = {
                    todo.isChecked ? {
                        backgroundColor: '#00cd96'
                    } : {}
                }>
                    <input 
                        className={cx('check-box')} 
                        checked={todo.isChecked} 
                        type = 'checkbox' 
                        onChange={() => handleCheck(todo.id)}
                    />
                    
                    <input
                        className={cx('desc-job')}
                        ref={inputRef}
                        style = {
                            todo.isChecked ? {
                                backgroundColor: '#00cd96'
                            } : {}
                        }
                        readOnly
                        value={value.name}
                        onChange = {e => setValue(e.target.value)}
                    />
                    {isFocus ? 
                    <FontAwesomeIcon icon={faFloppyDisk} className = {cx('icon-save')} onClick={() => handleSave(todo.id)}/>
                    : <FontAwesomeIcon className={cx('icon-pen')} icon = {faPen} onClick = {handleEdit} />
                    }
                    <DeleteJob setTodos={setTodos} todo={todo}/>
                </div>   
     );
}

export default Item;