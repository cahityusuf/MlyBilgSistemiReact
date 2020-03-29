import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { connect } from "react-redux";
import MaterialIcon from "../Toolbox/MaterialIcon";
import { getProjectNavigationDetail } from "../../Redux/Actions/ProjectsNavigationAction"



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


function MaterialListItem({ tokenSuccess, onClick, navigationDetail, open, index }) {

    useEffect(() => {
        if (navigationDetail.length === 0) {
            getProjectNavigationDetail(tokenSuccess.roleId, tokenSuccess.token);
        }

    }, []);

    const classes = useStyles();



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
                <ListItem button onClick={() => onClick}
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
                            <ListItem button>
                                <ListItemIcon>
                                    <MaterialIcon iconName={result.pageIconName} />
                                </ListItemIcon>
                                <ListItemText key={result.pagesId} primary={result.pagesName} />
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

    )


};





function mapStateToProps(state) {
    return {
        tokenSuccess: state.tokenReducer,
        navigationDetail: state.listProjectsNavigationDetailReducer
    };
}

const mapDispatchToProps = {
    getProjectNavigationDetail
};


export default connect(mapStateToProps, mapDispatchToProps)(MaterialListItem);