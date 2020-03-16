import React from "react";
import SelectInput from "../../Toolbox/SelectInput";
import Button from "@material-ui/core/Button";
import ListUserRoles from "./ListUserRoles";
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

const AddUserRoles = ({
  users,
  roles,
  userRoles,
  onChange,
  onSave,
  errors
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form onSubmit={onSave}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <SelectInput
                name="userId"
                label="User"
                value={users.id}
                defaultOption="Kullanıcı Seçiniz..."
                options={users.map(user => ({
                  value: user.id,
                  text: user.name
                }))}
                onChange={onChange}
                error={errors.name}
              />

              <SelectInput
                name="roleId"
                label="Role"
                value={roles.id}
                defaultOption="Sayfa Seçiniz..."
                options={roles.map(role => ({
                  value: role.id,
                  text: role.name
                }))}
                onChange={onChange}
                error={errors.pagesURL}
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

          <hr />
          <Grid item xs={12}>
            <ListUserRoles userRoles={userRoles}></ListUserRoles>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddUserRoles;
