import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { connect } from "react-redux";
import MaterialIcon from "../Toolbox/MaterialIcon";
import { useHistory } from "react-router-dom";
import { findAllByTestId } from '@testing-library/react';
import MaterialListItem from "../Toolbox/MaterialListItem"
import { getProjectNavigationDetail } from "../../Redux/Actions/ProjectsNavigationAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function NestedList({
  navigationDetail,
  tokenSuccess
}) {

  const classes = useStyles();
  const [open, setOpen] = React.useState({});
  const historyy = useHistory()

  useEffect(() => {
 
    navigationDetail.map(result=>(
      setOpen(state => ({
        ...state,
        belirtec: "null",
        [result.projectId]: false
      }))
    ))

    },[navigationDetail]);

  const handleClick = (id) => {

    setOpen(state => ({
      ...state,
      [id]: false
    }));

    if (open[id] === false) {
      setOpen(state => ({
        ...state,
        [id]: true
      }));
    }

    if (open[id] === true) {
      setOpen(state => ({
        ...state,
        [id]: false
      }));
    }


  };

  function StyledListItem({ listItem, index }) {

    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
        </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button onClick={() => handleClick(listItem.projectId)}
        >
          <ListItemIcon>
            <MaterialIcon iconName={listItem.pageIconName} />
          </ListItemIcon>
          <ListItemText key={listItem.projectId} primary={listItem.navigationName} />
          {open[index] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open[index]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {listItem.pages.map(result =>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <MaterialIcon iconName={result.pageIconName} />
                </ListItemIcon>
                <ListItemText onClick={()=>{ historyy.push(result.pagesURL)}} key={result.pagesId} primary={result.pagesName} />
              </ListItem>
            )}

          </List>
        </Collapse>

      </List>

    );

  };


  return (

    navigationDetail.map(result =>
      <StyledListItem listItem={result} index={result.projectId}></StyledListItem>
    )

  );
}



function mapStateToProps(state) {
  return {
    tokenSuccess: state.tokenReducer,
    navigationDetail: state.listProjectsNavigationDetailReducer
  };
}

// const mapDispatchToProps = {
//   getProjectNavigationDetail
// };


export default connect(mapStateToProps)(NestedList);



