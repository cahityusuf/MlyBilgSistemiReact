import React from "react";
import SelectInput from "../../Toolbox/SelectInput";
import Button from "@material-ui/core/Button";
import ListPagesRequest from "./ListPagesRequest";
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

const AddPagesRequest = ({
  requests,
  roles,
  rolesPages,
  pagesRequests,
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
                name="rolesPagesId"
                label="Page"
                value={rolesPages.rolesPagesId}
                defaultOption="Sayfa Seçiniz..."
                options={rolesPages.map(page => ({
                  value: page.rolesPagesId,
                  text: page.pagesURL + " ---> " + page.pagesDetail
                }))}
                onChange={onChange}
                error={errors.pagesURL}
              />

              <SelectInput
                name="requestsId"
                label="Request"
                value={requests.requestId}
                defaultOption="Request Seçiniz."
                options={requests.map(page => ({
                  value: page.requestId,
                  text: page.requestName + " ---> " + page.requestType
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
            <ListPagesRequest pagesRequests={pagesRequests}></ListPagesRequest>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddPagesRequest;
