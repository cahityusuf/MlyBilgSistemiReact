import React, { Component } from 'react'
import {Row,Col, Container} from "reactstrap"
import Navigation from '../Navigation/Navigation'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
          <Navigation></Navigation>
      </div>
    )
  }
}




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// //import TreeView from "../Navigation/TreeView";
// import AppBar from "../Navigation/AppBar";
// import Paper from '@material-ui/core/Paper';
// import NestedList from '../Navigation/NestedList';
// //import Navigation from "../Navigation/Navigation";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function Dashboard() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//         <AppBar/>
//         </Grid>
//         <Grid item xs={2}>
//         <Paper elevation={3} className={classes.paper}><NestedList/></Paper>
//         </Grid>
//         <Grid item xs={10}>
//         <Paper elevation={3} className={classes.paper}></Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
