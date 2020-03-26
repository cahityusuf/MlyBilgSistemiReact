import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { getNavigationTitlesDetail } from "../../Redux/Actions/NavigationTitlesAction";
import { connect } from "react-redux";

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function TreeViewGMail({
     navigationDetail,
     tokenSuccess,
     getNavigationTitlesDetail
   }) {
  const classes = useStyles();


    useEffect(() => {
    if (navigationDetail.length === 0) {
      getNavigationTitlesDetail(tokenSuccess.token);
    }
  }, []);


  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >

      {navigationDetail.map(item => (
        <StyledTreeItem nodeId={item.naviId} label={item.naviTitleName} labelIcon={item.pageIconName}>
          {item.pages.map(result => (
            <StyledTreeItem nodeId={item.pagesId} label={result.pagesName} labelIcon={result.pageIconName} color="#1a73e8" bgColor="#e8f0fe" labelInfo="2,294" />
          ))}
        </StyledTreeItem>
      ))}

      
    </TreeView>
  );
}

function mapStateToProps(state) {
  return {
    tokenSuccess: state.tokenReducer,
    navigationDetail: state.listNavigationTitlesDetailReducer
  };
}

const mapDispatchToProps = {
  getNavigationTitlesDetail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeViewGMail);




// import React, { useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TreeView from "@material-ui/lab/TreeView";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import TreeItem from "@material-ui/lab/TreeItem";
// import { connect } from "react-redux";
// import { getNavigationTitlesDetail } from "../../Redux/Actions/NavigationTitlesAction";

// const useStyles = makeStyles({
//   root: {
//     height: 216,
//     flexGrow: 1,
//     maxWidth: 400
//   }
// });

// function MultiSelectTreeView({
//   navigationDetail,
//   tokenSuccess,
//   getNavigationTitlesDetail
// }) {

//   useEffect(() => {
//     if (navigationDetail.length === 0) {
//       getNavigationTitlesDetail(tokenSuccess.token);
//     }
//   }, []);

//   const classes = useStyles();

//   return (
//     <TreeView
//       className={classes.root}
//       defaultCollapseIcon={<ExpandMoreIcon />}
//       defaultExpandIcon={<ChevronRightIcon />}
//       multiSelect
//     >
//       {navigationDetail.map(item => (
//         <TreeItem nodeId="1" label={item.naviTitleName}>
//           {item.pages.map(resultt => (
//             <TreeItem nodeId="2" label={resultt.pagesName} />
//           ))}
//         </TreeItem>
//       ))}
//     </TreeView>
//   );
// }

// function mapStateToProps(state) {
//   return {
//     tokenSuccess: state.tokenReducer,
//     navigationDetail: state.listNavigationTitlesDetailReducer
//   };
// }

// const mapDispatchToProps = {
//   getNavigationTitlesDetail
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MultiSelectTreeView);







// import React, { useEffect } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MUIList from '@material-ui/core/List';
// import MUIListItem from '@material-ui/core/ListItem';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { connect } from "react-redux";
// import { getNavigationTitlesDetail } from "../../Redux/Actions/NavigationTitlesAction";
// import { Link } from "react-router-dom";
// import MaterialIcon from "../Toolbox/MaterialIcon";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

// const TreeView = ({
//   navigationDetail,
//   tokenSuccess,
//   getNavigationTitlesDetail,
// }) =>
// {

//   useEffect(() => {
//   if (navigationDetail.length === 0) {
//     getNavigationTitlesDetail(tokenSuccess.token)
//     }

//   }, []);

//   const classes = useStyles();

//   const lst=()=>{
//   return navigationDetail.map(item=>
//     item.naviTitleName
//     // item.pages.map(resultt=>
//     //   console.log(resultt.pagesName)
//     //   )
//   );
//   }

// lst();

//   return (
//     <ExpansionPanel className={classes.root}>
//     <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
//         <Typography>{lst()}</Typography>
//     </ExpansionPanelSummary>
//     <ExpansionPanelDetails>
//         <MUIList>
//             {navigationDetail.map(item =>
//               item.pages.map(result=>
//                 <MUIListItem>
//                 {result.pagesName}
//                 </MUIListItem>
//                 )
//             )}
//         </MUIList>
//     </ExpansionPanelDetails>
// </ExpansionPanel>
//   );

//         }

// function mapStateToProps(state) {
//   return {
//     tokenSuccess: state.tokenReducer,
//     navigationDetail: state.listNavigationTitlesDetailReducer

//   };
// }

// const mapDispatchToProps = {
//     getNavigationTitlesDetail
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TreeView)
