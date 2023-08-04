import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import { Task } from "./components/Task"
import { useState } from 'react'
import styles from './App.module.css'
import clipboard from './assets/clipboard.svg'

export interface TaskType {
  content: string;
  finished: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function createTask(newTask: TaskType) {
    console.log('newTask',newTask);
    
    setTasks( state => {
      return [...state, newTask]
    })
  }

  function deleteTask(taskToDelete: string) {
    const filteredTasks = tasks.filter(task => task.content !== taskToDelete)
    setTasks(filteredTasks)
  }

  return (
    <div>
      <Header/>

      <main className={styles.container}>
        <NewTask createTask={createTask}/>

        <header className={styles.header}>
          <section>Tarefas criadas <span className={styles.counters}>{tasks.length}</span></section>
          <section>Concluídas <span className={styles.counters}>0</span></section>
        </header>


        {
          tasks.length === 0 ?
          <div className={styles.emptyTasks}>
            <img src={clipboard} alt="Sem tarefas cadastradas" />
            <p className={styles['p-title']}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

          :

          <ul className={styles.taskList}>
            {
              tasks.map(task => {
                return <Task key={task.content} task={task} deleteTask={deleteTask}/>
              })
            }
          </ul>

        }

      </main>
    </div>
  )
}