import React, { useState } from 'react'
import { Form, Button, Label, Input } from 'reactstrap'


const TodoForm = (props) => {

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
        <Form onSubmit={submitHandler}>
            <Label>
                <Input
                name='item'
                type='text'
                placeholder='Insert Task' 
                values={item}
                onChange={onchangeHandler}
                ></Input>
            </Label>
            <Label>
                <Button color="success">ADD</Button>
            </Label>
            <Label>
                <Button color="danger" onClick={props.deleteTask}>DELETE</Button>
            </Label>
        </Form>
    )
}


export default TodoForm;