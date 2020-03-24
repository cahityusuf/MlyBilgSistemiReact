import React from "react";
import TextInput from "../../Toolbox/TextInput";
import Button from "@material-ui/core/Button";
import ListRole from "./ListRole";
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

const AddRole = ({ onChange, onSave, error }) => {
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
                name="name"
                placeHolder="Rol adını giriniz."
                onChance={onChange}
                errors={error}
                variant="outlined"
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
            <ListRole></ListRole>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddRole;

