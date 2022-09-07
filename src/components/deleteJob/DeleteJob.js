import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function DeleteJob({todo, setTodos}) {
    const handleDelete = (job) => {
        setTodos(prev => (
            prev.filter(item => item !== job)
        ))
    }
    return ( 
        <div>
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(todo)}/>
        </div>
     );
}

export default DeleteJob;