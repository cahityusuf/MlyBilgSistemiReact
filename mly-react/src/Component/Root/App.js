import React, { useEffect } from "react";
//import Dashboard from "../Root/Dashboard"
import Login from "../Authantication/SignInSide"
import { connect } from "react-redux";
import AppBar from "../Navigation/AppBar";
import TreeView from "../Navigation/TreeView";
import Router from "../../Router/Router";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    //background:'linear-gradient(45deg, #e0e2e4 30%, #e0e2e4 90%)'
  },

  treeViewPaper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    background:'linear-gradient(45deg, #e0e2e4 30%, #e0e2e4 90%)'
  },
}));


function App({ tokenSuccess }) {
  const classes = useStyles();




  if (!tokenSuccess.isAuthenticated) {
    return (<div className={classes.root}><Login /></div>)
  } else {
 
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <AppBar />
          </Grid>
          <Grid item xs={3}>
          <Paper className={classes.treeViewPaper}><TreeView /></Paper>
          </Grid>
          <Grid item xs={9}>
          <Paper className={classes.paper}><Router /></Paper>
          </Grid>
        </Grid>
      </div>)
    // return (<div><Dashboard/></div>)
    // return (<div><Router/></div>)
  }

}

function mapStateToProps(state) {
  return {
    tokenSuccess: state.tokenReducer,

  };
}



export default connect(mapStateToProps)(App);
