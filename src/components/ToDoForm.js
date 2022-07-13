import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

export default function ToDoForm() {
    const [name, setName] = useState("");

    const handleChange = e => {
        setName(e.target.value);
    }


    return <Form>
        <InputGroup className="mb-4">
            <FormControl placeholder='New To Do' onChange= {handleChange} value={name} />
            <Button type='submit'>
                Add
            </Button>
        </InputGroup>
    </Form>
}