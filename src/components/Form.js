import React, { useState } from 'react'


const Form = (props) => {

    const  [ item, setItem] = useState('')

    const onchangeHandler = (e) => {

        setItem(e.target.value)
        console.log(item)
    }

    const submitHandler = (e) => {
        e.preventDefault();
            props.addTask(item)
            e.target.reset()
            setItem('')
    }

    return(
        <form onSubmit={submitHandler}>
            <label>
                <input
                name='item'
                type='text'
                placeholder='Insert Task' 
                values={item}
                onChange={onchangeHandler}
                ></input>
            </label>
            <label>
                <button>ADD</button>
            </label>
            <label>
                <button>DELETE</button>
            </label>
        </form>
    )
}


export default Form;