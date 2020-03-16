import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: '100%'
    }
  }
}));

const TextInput = ({ name, label, onChance, placeHolder, value, error,id }) => {
  const classes = useStyles();
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      {/* <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChance}
        /> */}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          name={name}
          value={value}
          id={id}
          label={placeHolder}
          onChange={onChance}
          variant="outlined"
        />
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextInput;
