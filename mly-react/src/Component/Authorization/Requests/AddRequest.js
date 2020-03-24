import React from "react";
import TextInput from "../../Toolbox/TextInput";
import SelectInput from "../../Toolbox/SelectInput";
import Button from "@material-ui/core/Button";
import ListRequest from "./ListRequest";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  }
}));

const AddRequest = ({ requestList, requestType, onChange, onSave, error }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form
        onSubmit={onSave}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TextInput
                name="requestName"
                placeHolder="Request adını giriniz.(Ör:Roles.Get) Yetkilendirme işleminde kullanılacaktır."
                onChance={onChange}
                errors={error}
                variant="outlined"
              />
              <SelectInput
                name="requestTypeId"
                label="Request"
                value={requestType.requestTypeId}
                defaultOption="Request tipini seçiniz."
                options={requestType.map(request => ({
                  value: request.requestTypeId,
                  text: request.requestTypeName
                }))}
                onChange={onChange}
                //error={error.pagesURL}
              />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Button type="submit" variant="contained" color="primary">
                Kaydet
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <ListRequest requestList={requestList}></ListRequest>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddRequest;

// import React from "react";
// import TextInput from "../../Toolbox/TextInput";
// import SelectInput from "../../Toolbox/SelectInput";
// import Button from "@material-ui/core/Button";
// import ListRequest from "./ListRequest";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "100%"
//     }
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "left",
//     color: theme.palette.text.secondary
//   }
// }));

// const AddUserRoles = ({
//   request,
//   requestType,
//   onChange,
//   onSave,
//   errors, }) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <form onSubmit={onSave} className={classes.root} noValidate autoComplete="off">
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Paper className={classes.paper}>
// <TextInput
//     name="requestName"
//     placeHolder="Request adını giriniz.(Ör:Roles.Get) Yetkilendirme işleminde kullanılacaktır."
//     onChance={onChange}
//     errors={errors}
//     variant="outlined"
//   />
//   <SelectInput
//   name="requestTypeId"
//   label="Page"
//   value={requestType.requestTypeId}
//   defaultOption="Request tipini seçiniz."
//   options={requestType.map(request => ({
//     value: request.requestTypeId,
//     text: request.RequestTypeName
//   }))}
//   onChange={onChange}
//   error={errors.pagesURL}
// />
//             </Paper>
//           </Grid>

//           <Grid item xs={12}>
//             <Paper className={classes.paper}>
//               <Button type="submit" variant="contained" color="primary">
//                 Kaydet
//               </Button>
//             </Paper>
//           </Grid>

// <Grid item xs={12}>
// <ListRequest request={request}></ListRequest>
// </Grid>

//         </Grid>
//       </form>
//     </div>
//   );
// };

// export default AddUserRoles;
