import React, {useEffect} from 'react'
import TodoList  from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';

function App() {

  const   [todos,setTodos] = React.useState([ ])
  useEffect(() => {
  fetchData()},[])
  
 async function fetchData(){
  await fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(todos => setTodos(todos))
  .catch((err => {
    console.log(err)
  }))
  console.log(todos)
  }



function toggleTodo(id){
 setTodos(todos.map(todo => {
    if(todo.id === id){
      todo.completed=!todo.completed 
    } 
    return todo
  } ))

}

async function addTodo(title) {
 await fetch('https://jsonplaceholder.typicode.com/todos',{
  method: 'POST',
  body: JSON.stringify({
    title:title,
    completed:false
  }),
  headres: {
    "Content-type": "application/json; charset=UTF-8",
  }
 })
 .then(response =>response.json())
 .then(data => setTodos(todos.concat([
       {
        title,
         id: data.id,
     completed: false
    }
    ] )
   )
   )

 .catch((err => {
   console.log(err)
 }))
}

async function removeTodo(id) {
  await fetch(`https://jsonplaceholder.typicode.com/todos?id=${id}`,{
   method: 'DELETE',
   headres: {
     "Content-type": "application/json; charset=UTF-8",
   }
  })
  .then(response =>response.json())
  .then(todos =>  setTodos(todos.filter(todo=> todo.id !== id))
    )
  .catch((err => {
    console.log(err)
  }))
 }

  return (

   <div className='wrapper'>
<h1>To do list </h1>
<AddTodo onCreate={addTodo}/>
  {console.log(todos)}
  {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo}/> : <p>No todos!</p> }

   </div>
 
  )
}

export default App;
