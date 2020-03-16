import React from "react";

const TextInput = ({ name, label, onChance, placeHolder, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    // <div className={wrapperClass}>
    //   <label htmlFor={name}>{label}</label>
    <div className="field">
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeHolder}
        value={value}
        onChange={onChance}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
    // </div>
  );
};

export default TextInput;
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import FormGroup from '@material-ui/core/FormGroup';

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: '100%'
//     }
//   }
// }));

// const TextInput = ({ name, label, onChance, placeHolder, value, error }) => {
//   const classes = useStyles();
//   let wrapperClass = "form-group";
//   if (error && error.length > 0) {
//     wrapperClass += " has-error";
//   }

//   return (

//       <FormGroup className={classes.root} noValidate autoComplete="off">
//         <TextField
//           name={name}
//           value={value}
//           label={placeHolder}
//           onChange={onChance}
//           error={error}
//           variant="outlined"
//         />
//             {error && <div className="alert alert-danger">{error}</div>}
//       </FormGroup>

//   );
// };

// export default TextInput;
