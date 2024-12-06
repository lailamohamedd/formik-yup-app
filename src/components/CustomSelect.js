import { Alert, InputLabel, Select } from '@mui/material';
import { useField } from 'formik';
import React from 'react'

const CustomSelect  = ({label, ...props}) => {
    const [field, meta] = useField(props);
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select sx={{ m: 1, width: '100%' }}
        {...field} 
        {...props} 
        className={meta.touched && meta.error ? "input-error" : ""} 
      />
      {meta.touched && meta.error && (
        <Alert severity="error" style={{marginTop: "10px"}}>
          {meta.error}
        </Alert>
      )}
    </>
  )
}

export default CustomSelect
