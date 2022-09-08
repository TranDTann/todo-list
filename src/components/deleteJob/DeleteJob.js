import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import className from "classnames/bind";
import styles from './DeleteJob.module.scss'

const cx=className.bind(styles)

function DeleteJob({todo, setTodos}) {
    const handleDelete = (job) => {
        setTodos(prev => (
            prev.filter(item => item !== job)
        ))
    }
    return ( 
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('trash-icon')} icon={faTrash} onClick={() => handleDelete(todo)}/>
        </div>
     );
}

export default DeleteJob;