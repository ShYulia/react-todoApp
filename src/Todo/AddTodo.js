import React, {useState} from 'react'


function AddTodo({onCreate}) {
    const [value, setValue] = useState(' ')


function submitHandler(event){
    event.preventDefault()
    if(value.trim()){
        onCreate(value)
        setValue('')
    }
}
    return (
        <form style={{marginBottom:"1rem"}} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}>
            </input>
            <button>Add</button>
        </form>
    )
}

export default AddTodo 