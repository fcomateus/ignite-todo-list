import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import { Task } from "./components/Task"
import { useState, useEffect } from 'react'
import styles from './App.module.css'
import clipboard from './assets/clipboard.svg'

export interface TaskType {
  content: string;
  finished: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [concludedTasksText, setConcludedTasksText] = useState('0')

  function createTask(newTask: TaskType) {
    
    setTasks( state => {
      return [...state, newTask]
    })
  }

  function deleteTask(taskToDelete: string) {
    const filteredTasks = tasks.filter(task => task.content !== taskToDelete)
    setTasks(filteredTasks)
  }

  function updateTask(taskToUpdate: string) {
    const newTaskList = tasks.map(task => {
      if(task.content === taskToUpdate) {
        task.finished = !task.finished
      }

      return task
    })

    setTasks(newTaskList)
  }


  useEffect(() => {
    let counter = 0

    tasks.map(task => {
      if(task.finished){
        counter++
      }
    })

    const text = counter === 0 ? '0' : `${counter} de ${tasks.length}`
    setConcludedTasksText(text)

  }, [tasks])


  return (
    <div>
      <Header/>

      <main className={styles.container}>
        <NewTask createTask={createTask}/>

        <header className={styles.header}>
          <section>Tarefas criadas <span className={styles.counters}>{tasks.length}</span></section>
          <section>Concluídas <span className={styles.counters}>{concludedTasksText}</span></section>
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
                return <Task key={task.content} task={task} updateTask={updateTask} deleteTask={deleteTask}/>
              })
            }
          </ul>

        }

      </main>
    </div>
  )
}