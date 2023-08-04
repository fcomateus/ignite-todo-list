import styles from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { FormEvent, ChangeEvent, useState } from 'react'

interface NewTaskProps {
    createTask: (taskContent: string) => void
}

export function NewTask({ createTask }: NewTaskProps) {

    const [content, setContent] = useState('')

    function handleSubmitNewTask(event: FormEvent) {
        event.preventDefault()
        if(content.trim() === '') {
            return alert('Digite o conteúdo da tarefa')
        }

        createTask(content)
        
    }

    function handleChangeTaskContent(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmitNewTask}>
            <input 
                className={styles.inputCreateTask} 
                placeholder='Adicione uma nova tarefa' 
                type="text"
                value={content}
                onChange={handleChangeTaskContent}
            />
            <button className={styles.buttonCreateTask}>
                Criar
                <PlusCircle size={18}/>
            </button>
        </form>
    )
}