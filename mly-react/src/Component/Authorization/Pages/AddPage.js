import React from "react";
import TextInput from "../../Toolbox/TextInput";
import CheckboxLabels from "../../Toolbox/CheckboxLabels";
import Button from "@material-ui/core/Button";
import PageList from "./PageList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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

const AddUserRoles = ({ pages, onChange, onSave, error }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form onSubmit={onSave} className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TextInput
                name="pagesURL"
                placeHolder="Sayfa URL tanımını giriniz"
                onChance={onChange}
                errors={error}
                variant="outlined"
              />
              <TextInput
                name="pagesDetail"
                placeHolder="Sayanın amacını açıklayınız"
                onChance={onChange}
                errors={error}
                variant="outlined"
              />
              <CheckboxLabels
                onChange={onChange}
                label="Sayfa aktif mi?"
                name="status"
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
            <PageList pages={pages}></PageList>
          </Grid>

        </Grid>
      </form>
    </div>
  );
};

export default AddUserRoles;
