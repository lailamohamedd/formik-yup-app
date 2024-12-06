import { Alert, InputLabel, TextField } from '@mui/material';
import { useField } from 'formik'
import React from 'react'

const CustomInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <TextField style={{width: "100%"}} {...field} {...props} className={meta.touched && meta.error ? "input-error" : ""} variant="outlined" />
      {meta.touched && meta.error && (
        <Alert severity="error" style={{marginTop: "10px"}}>
          {meta.error}
        </Alert>
      )}
    </>
  )
}

export default CustomInput
