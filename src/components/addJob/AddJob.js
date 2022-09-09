import { useRef, useState } from "react";
import className from "classnames/bind";

import styles from './AddJob.module.scss'

const cx=className.bind(styles)

function AddJob({ todos, setTodos}) {
    const [job, setJob] = useState('')
    const inputRef = useRef()
    
    const handleAdd = () => {
        if(job.trim() !== '') {
            setTodos(prev => (
                [...prev, {id: todos.length + 1, name: job, isChecked: false}]
            ))
            setJob('')
            inputRef.current.focus()
        }
    }

    return ( 
        <div>
            { 
                <div className={cx('action-add')}>
                    <input 
                        className={cx('input')} 
                        ref={inputRef} 
                        placeholder="Add job..." 
                        value={job} 
                        onChange = {e => setJob(e.target.value)}></input>
                    <button className={cx('btn-add')} onClick={handleAdd}>Add</button>
                </div>
           }
        </div>
     );
}

export default AddJob;