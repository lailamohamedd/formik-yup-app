import { useFormik } from 'formik'
import React from 'react'
import { basicSchema } from '../schemas'
import { Alert, Button, InputLabel, TextField } from '@mui/material';

const onSubmit = async(values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}
const BasicForm = () => {
    const { 
        values, 
        errors, 
        touched, 
        isSubmitting, 
        handleChange, 
        handleBlur, 
        handleSubmit
     } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    })
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <InputLabel htmlFor='email'>Email</InputLabel>
      <TextField
        value={values.email}
        style={{width: "100%"}}
        onChange={handleChange}
        onBlur={handleBlur}
        id='email' type='email' 
        placeholder='Enter your email' 
        className={errors.email && touched.email ? "input-error" : ""}
        />
         {errors.email && touched.email && (
              <Alert severity="error" style={{marginTop: "7px"}}>
                {errors.email}
              </Alert>
            )}

      <InputLabel htmlFor='age'>age</InputLabel>
      <TextField
        value={values.age}
        style={{width: "100%"}}
        onChange={handleChange}
        onBlur={handleBlur}
        id='age' type='number' 
        placeholder='Enter your age' 
        className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && (
              <Alert severity="error" style={{marginTop: "7px"}}>
                {errors.age}
              </Alert>
            )}
        
        <InputLabel htmlFor='password'>password</InputLabel>
         <TextField
           value={values.password}
           onChange={handleChange}
           onBlur={handleBlur}
           id='password' type='password' 
           placeholder='Enter your password' 
           style={{width: "100%"}}
           className={errors.password && touched.password ? "input-error" : ""}
           />
           {errors.password && touched.password && (
              <Alert severity="error" style={{marginTop: "7px"}}>
                {errors.password}
              </Alert>
            )}


        <InputLabel htmlFor='confirmPassword'>confirm password</InputLabel>
        <TextField
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            id='confirmPassword' type='password' 
            placeholder='Enter your confirm Password' 
            style={{width: "100%"}}
            className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Alert severity="error" style={{marginTop: "7px"}}>
                {errors.confirmPassword}
              </Alert>
            )}

        <Button variant="contained" disabled={isSubmitting} type='submit'>Submit</Button>
    </form>
  )
}

export default BasicForm
