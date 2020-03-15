import React from "react";
import SelectInput from "../../Toolbox/SelectInput";
import AlertDialog from "../../Toolbox/AlertDialog";
import { Button } from "reactstrap";
import ListRolesPages from "./ListRolesPages";
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

const AddRolesPages = ({
  roles,
  pages,
  onChange,
  onSave,
  errors,
  rolesPages
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form onSubmit={onSave}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <SelectInput
                name="roleId"
                label="Role"
                value={roles.name}
                defaultOption="Rol Seçiniz..."
                options={roles.map(role => ({
                  value: role.id,
                  text: role.name
                }))}
                onChange={onChange}
                error={errors.name}
              />

              <SelectInput
                name="pagesId"
                label="Page"
                value={pages.pagesId}
                defaultOption="Sayfa Seçiniz..."
                options={pages.map(page => ({
                  value: page.pagesId,
                  text: page.pagesURL + " ---> " + page.pagesDetail
                }))}
                onChange={onChange}
                error={errors.pagesURL}
              />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Button type="submit" className="btn btn-success">
                Kaydet
              </Button>
            </Paper>
          </Grid>

          <hr />
          <Grid item xs={12}>
            <ListRolesPages rolesPages={rolesPages}></ListRolesPages>
          </Grid>
        </Grid>
        
      </form>
    </div>
  );
};

export default AddRolesPages;
