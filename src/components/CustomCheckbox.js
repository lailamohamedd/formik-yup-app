import { Alert, Checkbox, InputLabel } from '@mui/material';
import { useField } from 'formik';
import React from 'react'

const CustomCheckbox = ({label, ...props}) => {
    const [field, meta] = useField(props);
  return (
    <>
      <div className='checkbox'>
        <Checkbox
            {...field} 
            {...props} 
            className={meta.touched && meta.error ? "input-error" : ""} />
            <InputLabel>I Accept the terms of services</InputLabel>
      </div>
      {meta.touched && meta.error && (
        <Alert severity="error" style={{marginTop: "10px"}}>
          {meta.error}
        </Alert>
      )}
    </>
  )
}

export default CustomCheckbox
