import React, { useState, useEffect} from 'react'
import FormInputs from './FormInputs'
import SubmitButton from './SubmitButton'
import Users from './Users'
import * as yup from 'yup'

// set initial values

const initialFormValues = {
    name: '',
}
const initialFormErrors = {
    name: '',
    age: '',
}
const initialUsers = []
const initialButtonDisabled = true


export default function Form(props){

    // set states

    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [Buttondisabled, setDisabled] = useState(initialButtonDisabled)

    // networking helper functions

    // form helper functions

    const inputChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }    


    return (
        <div>
            <h1>Form</h1>
            <FormInputs/>
            <SubmitButton/>
            <Users/>
        </div>
    )
}