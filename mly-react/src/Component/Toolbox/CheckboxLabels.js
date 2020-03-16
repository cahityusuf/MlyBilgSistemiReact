import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels({checked,onChange,value,label,name}) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={onChange} value={value} name={name}/>
        }
        label={label}
      />
    </FormGroup>
  );
}

