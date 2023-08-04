import styles from './Task.module.css'
import { TaskType } from '../App';
import { Trash, Check } from "phosphor-react";
import { useState, ChangeEvent } from 'react';

interface TaskProps {
    task: TaskType;
    deleteTask: (content:string) => void;
    updateTask: (content:string) => void;
}

export function Task({ task, deleteTask, updateTask }:TaskProps) {
    const [checked, setChecked] = useState(false)

    const randomId = 'task_' + Math.random() * 16

    function handleClickCheckbox(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.checked
        setChecked(value)
        handleUpdateStatus()
    }

    function handleDeleteTask() {
        deleteTask(task.content)
    }

    function handleUpdateStatus() {
        updateTask(task.content)
    }

    return (
        <li className={checked ? styles.finishedTask : styles.unfinishedTask}>
            
            <div className={styles.contentAndInputWrapper}>
                <label className={checked ? styles.checkedLabel : styles.uncheckedLabel} htmlFor={randomId}>
                    {
                        checked ? <Check weight={"bold"}/> : ''
                    }
                </label>

                <input onChange={handleClickCheckbox} type="checkbox" id={randomId}/>
                <p>{task.content}</p>
            </div>

            <button onClick={handleDeleteTask} className={styles.deleteButton}>
                <Trash size={18}/>
            </button>

        </li>
    )
}