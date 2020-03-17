import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const TextInput = ({ name, label, onChance, placeHolder, value, errors }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" label={placeHolder} value={value} onChange={onChance} name={name} variant="outlined" />
    {errors&&<div className="alert alert-danger">{errors}</div>}
  </form>
  );
};

export default TextInput;
