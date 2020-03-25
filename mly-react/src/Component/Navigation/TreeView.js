import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Router from "../../Router/Router";
import { connect } from "react-redux";
import { getNaviRolesPages } from "../../Redux/Actions/RolesPagesAction";
import { getNavigationTitles } from "../../Redux/Actions/NavigationTitlesAction";
import { Link } from "react-router-dom";
import MaterialIcon from "../Toolbox/MaterialIcon";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const TreeView = ({
  naviRolesPages,
  navigation,
  getNaviRolesPages,
  tokenSuccess,
  getNavigationTitles,
}) =>
{

  useEffect(() => {
  if (navigation.length === 0 && naviRolesPages.length===0) {
      getNavigationTitles(tokenSuccess.token);
      getNaviRolesPages(tokenSuccess.token,null)
    }

  }, []);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const getir =(naviId)=>{
    getNaviRolesPages(tokenSuccess.token,naviId);
  }

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

      {navigation.map((navi)=>
          <ListItem button onClick={handleClick} key={navi.naviId}>
            <ListItemIcon>
            <MaterialIcon iconName={navi.pageIconName}/>
            </ListItemIcon>
            <ListItemText primary={navi.naviTitleName} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem> 

              getNaviRolesPages(tokenSuccess.token,1).then(naviRolesPages.map((rolePages)=>(
                <Collapse in={open} timeout="auto" unmountOnExit key={rolePages.rolesPagesId}>
                <List component="div" key={rolePages.rolesPagesId} disablePadding>
                  <ListItem button className={classes.nested} key={rolePages.rolesPagesId}>
                    <ListItemIcon>
                    <MaterialIcon iconName={rolePages.pageIconName}/>
                    </ListItemIcon>
                    <ListItemText primary={rolePages.pageName} />
                  </ListItem>
                </List>
              </Collapse>
                
        
              ))
            )}
    </List>
  );

}

function mapStateToProps(state) {
  return {
    naviRolesPages: state.listNaviRolesPagesReduce,
    tokenSuccess: state.tokenReducer,
    navigation: state.navigationTitlesReducer
  };
}

const mapDispatchToProps = {
  getNaviRolesPages,
  getNavigationTitles,
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeView)
