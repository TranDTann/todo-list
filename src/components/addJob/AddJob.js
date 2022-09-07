import { useRef, useState } from "react";

function AddJob({ todos, setTodos}) {
    const [job, setJob] = useState('')
    const inputRef = useRef()
    
    
    const handleAdd = () => {
        setTodos(prev => (
            [...prev, {id: todos.length + 1, name: job, isChecked: false}]
        ))
        inputRef.current.focus()
        setJob('')
    }

    return ( 
        <div>
            <input ref={inputRef} placeholder="Add job..." value={job} onChange = {e => setJob(e.target.value)}></input>
            <button onClick={handleAdd}>Add</button>
        </div>
     );
}

export default AddJob;