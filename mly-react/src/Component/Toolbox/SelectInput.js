
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options
}) {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id={label}>
          {defaultOption}
        </InputLabel>
        <Select
          labelId={label}
          labelWidth={labelWidth}
          name={name}
          value={value}
          onChange={onChange}
          
        >
          <MenuItem value="">{defaultOption}</MenuItem>
          {options.map(option => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.text}
              </MenuItem>
            );
          })}
        </Select>
        {error&&<div className="alert alert-danger">{error}</div>}
      </FormControl>
    </div>
  );
}
