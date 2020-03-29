import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function TextArea({id,label,placeHolder,onChange,errors}) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off"> 
      <div>
        <TextField
          id={id}
          label={label}
          placeholder={placeHolder}
          onChange={onChange}
          multiline
          variant="outlined"
        />
        {errors&&<div className="alert alert-danger">{errors}</div>}
      </div>
    </form>
  );
}
