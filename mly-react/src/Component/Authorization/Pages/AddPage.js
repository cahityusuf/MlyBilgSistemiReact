import React from "react";
import TextInput from "../../Toolbox/TextInput";
import CheckboxLabels from "../../Toolbox/CheckboxLabels";
import PageList from "./PageList";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  }
}));

const AddPage = ({ pages, onChange, onSave, errors,checked }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form onSubmit={onSave}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TextInput
                name="pagesURL"
                label="Sayfa URL tanımını giriniz"
                placeHolder="Sayfa URL tanımını giriniz"
                value={pages.pagesURL}
                id="pagesURL"
                onChange={onChange}
                error={errors.name}
              />

              <TextInput
                name="pagesDetail"
                label="Sayfanın amacını giriniz"
                placeHolder="Sayfa URL tanımını giriniz"
                value={pages.pagesDetail}
                id="pagesDetail"
                onChange={onChange}
                error={errors.name}
              />

              <CheckboxLabels  onChange={onChange} value={checked} label="Sayfa aktif mi?" name="status" />
              
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Button type="submit" variant="contained" color="primary">
                Kaydet
              </Button>
            </Paper>
          </Grid>

          <hr />
          <Grid item xs={12}>
            <PageList pages={pages}></PageList>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddPage;
