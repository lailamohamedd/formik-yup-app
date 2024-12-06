import { Form, Formik } from 'formik'
import React from 'react'
import CustomInput from './CustomInput'
import { advancedSchema } from '../schemas'
import CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckbox'
import { Button, MenuItem } from '@mui/material'

const onSubmit = async(values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};
const AdvancedForm = () => {
  return (
    <Formik 
        initialValues={{ username: "", jobType: "", acceptedTos: false}}
        validationSchema={advancedSchema} onSubmit={onSubmit}
    >
        {(isSubmitting) => (
            <Form>
                <CustomInput label="username" name="username" type="text" placeholder="Enter your username" />
                <CustomSelect 
                    label="Job Type"
                    name="jobType"
                    style={{margin: 0}}
                    placeholder="please select your Job Type"
                >
                    <MenuItem value="designer">please select your job type</MenuItem>
                    <MenuItem value="designer">designer</MenuItem>
                    <MenuItem value="developer">developer</MenuItem>
                    <MenuItem value="manager">manager</MenuItem>
                    <MenuItem value="other">other</MenuItem>
                </CustomSelect>
                <CustomCheckbox type="checkbox" name="acceptedTos" />
                {/* <input 
                    type='text' 
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name='name'
                    /> */}
                {/* <Button variant="contained" disabled={isSubmitting} type='submit'>Submit</Button> */}
                <Button variant="contained" type='submit'>Submit</Button>
            </Form>
        )}
    </Formik>
  )
}

export default AdvancedForm
