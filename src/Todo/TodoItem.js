import React, {useContext} from 'react'





const styles = {
    li:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        border:'1px solid #ccc',
        padding:'.5rem 1rem',
        borderRadius:'4px',
        marginBottom:'.5rem'
    },

    input:{
   marginRight:'1rem'

    },

}
 
function TodoItem({todo,index, onChange,onClick}) {
const classes = []

if (todo.completed){
    classes.push('done')
}

    return(
     <li style={styles.li}>
        <span className={classes.join(' ')}>
        <input type="checkbox" checked={todo.completed} style={styles.input} onChange={() =>onChange(todo.id)}/>
       
        <strong >{index+1 }</strong>
        &nbsp;
        { todo.title}  </span>
        <button className='rm' onClick={() => onClick(todo.id)}> &times;</button>
        </li>
    )
 
}

export default TodoItem