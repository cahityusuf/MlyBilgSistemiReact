import React from 'react'
import {Route, Switch} from "react-router-dom"
import NotFound from "../Component/Common/NotFound"
import Dashboard from "../Component/Root/Dashboard"
import NewRole from "../Component/Authorization/Roles/NewRole"
import NewPage from "../Component/Authorization/Pages/NewPage"
import NewRequest from "../Component/Authorization/Requests/NewRequest"
import RolesPages from "../Component/Authorization/RolesPages/RolesPages"
import PagesRequest from "../Component/Authorization/PagesRequest/PagesRequest"
import UserRoles from "../Component/Authorization/UserRoles/UserRoles"
import NewProject from "../Component/Authorization/Projects/NewProject"
import SignInSide from "../Component/Authantication/SignInSide"
import ProtectedRoute from "./ProtectedRoute"
import { connect } from "react-redux";
import { getProjectNavigationDetail } from "../Redux/Actions/ProjectsNavigationAction";

const LoginPage=()=>{
    return <Route path="/" exact component={SignInSide}/>
}

const DashboardPage=()=>{

    return <ProtectedRoute path="/" component={Dashboard}/>
}


const Router=()=> {


    return(
     

    <Switch>
            if (!tokenSuccess.isAuthenticated) {
                LoginPage
            } else {
                DashboardPage
            }

            <ProtectedRoute path="/dashboard" component={Dashboard}/>
            <ProtectedRoute path="/newrole" component={NewRole}/>
            <ProtectedRoute path="/newpage"  component={NewPage}/>
            <ProtectedRoute path="/newrequest"  component={NewRequest}/>
            <ProtectedRoute path="/pagesrequests"  component={PagesRequest}/>
            <ProtectedRoute path="/rolespages/:rolId"  component={RolesPages}/>
            <ProtectedRoute path="/userroles"  component={UserRoles}/>
            <ProtectedRoute path="/newproject"  component={NewProject}/>
            <ProtectedRoute component={NotFound}/>
     </Switch>    
    )
        
}

function mapStateToProps(state) {
    return {
      tokenSuccess: state.tokenReducer
    };
  }


export default connect(mapStateToProps)(Router);