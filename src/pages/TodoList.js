import React, { useState } from 'react'
import { useAppContext } from '../store/AppProvider'
import '../styles/pages/todolist.scss'

const TodoList = () => {
  
  // el task tiene que se el mismo nombre de alguna de la propiedad de value del provider 
  const {tasks, dispatch} = useAppContext();
  const [showAddBox, setShowAddBox ] = useState(false)

  // start in null/ this will indicate the item-id of the item that you want to have the change 
  const [itemId, setItemId ] = useState(null)
  const [newText, setNewText ] = useState('')
  

  const handleEdit = (id, prevText) => {
    setItemId(id)
    setNewText(prevText)
  }

  const handleChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    setNewText(value)
  }

  const editTask = (e) => {
    e.preventDefault()
    let task =         {
        id:itemId,
        fecha: 'fecha',
        texto: newText
    }
    
    dispatch({
      type: 'EDIT',
      value: task
    })

    setItemId(null)
  }


  const handleAdd = (e) => {
    e.preventDefault()
    setShowAddBox((prevCount)=> !prevCount)
  }

  const addTask = (e) => {
    e.preventDefault()
    let task =         {
        id: tasks.length + 1,
        fecha: 'fecha',
        texto: newText
    }
    
    dispatch({
      type: 'ADD',
      value: task
    })

    setShowAddBox((prevCount)=> !prevCount)
  }

  const deleteTask = (id) => {
    dispatch({
      type: 'DELETE',
      value: id
    })
  }


  const formBox = (text) =>  <div className='c-list__bottom text-center'>
    { showAddBox ? (<div>
        <input type='text' value={text} onChange={handleChange} placeholder='Agrega una tarea :)'/>
        <button type="button" onClick={addTask} className='c-button c-button--big'>
          Add Task!
        </button>
      </div>) : (<div>
        <input type='text' value={newText} onChange={handleChange}/>
        <button type="button" onClick={editTask} className='c-button c-button--big'>
          Edit Task!
        </button>
      </div>)
    }
  </div>

  let tasklist = <ul className='p-0 m-0'>
                  <li>
                    <div className='c-task d-flex  align-items-center justify-content-between'>
                      <div className='c-task__text'>
                        Sin tareas
                      </div>
                    </div>
                  </li>
                </ul>

  if(tasks.length !== 0) {
    tasklist =<ul className='p-0 m-0'>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className='c-task d-flex  align-items-center justify-content-between'>
              <div className='c-task__text'>
                {itemId === task.id ? (formBox(task.texto)) : task.texto}
              </div>
              <div className='c-task__features'>
                <button  className='c-button' onClick={() => handleEdit(task.id, task.texto)}>Edit</button>
                <button type='button' onClick={() => deleteTask(task.id)} className='c-button'>Del</button>
              </div>
            </div>
          </li>
        ))
          
        }
      </ul>
  }

  return (
    <section className='c-section c-section--todo'>
      <div className='container'>
        <div className='c-list'>
          {tasklist}
          <div className='c-list__bottom text-center'>
            <button type="button" onClick={handleAdd} className='c-button c-button--big'>
              {showAddBox ? ('Close Add Option') : ('Add Task')}
            </button>
          </div>

          {showAddBox ? (formBox()) : (null)}
        </div>
      </div>
    </section>
  )
}

export default TodoList