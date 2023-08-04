import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import { Task } from "./components/Task"
import { useState } from 'react'
import styles from './App.module.css'
import clipboard from './assets/clipboard.svg'
export function App() {
  const [tasks, setTasks] = useState([])

  function createTask(taskContent: string) {
    console.log(taskContent);
    
  }

  return (
    <div>
      <Header/>

      <main className={styles.container}>
        <NewTask createTask={createTask}/>

        <header className={styles.header}>
          <section>Tarefas criadas <span className={styles.counters}>0</span></section>
          <section>Concluídas <span className={styles.counters}>0</span></section>
        </header>

        <div className={styles.emptyTasks}>
          <img src={clipboard} alt="Sem tarefas cadastradas" />
          <p className={styles['p-title']}>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        {/* <ul>
          <Task/>
        </ul> */}

      </main>
    </div>
  )
}