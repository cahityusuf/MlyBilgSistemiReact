import React from 'react'
import {Route, Switch} from "react-router-dom"
import NotFound from "../Component/Common/NotFound"
//import Dashboard from "../Component/Root/Dashboard"
import NewRole from "../Component/Authorization/Roles/NewRole"
import NewPage from "../Component/Authorization/Pages/NewPage"
import NewRequest from "../Component/Authorization/Requests/NewRequest"
import RolesPages from "../Component/Authorization/RolesPages/RolesPages"
import PagesRequest from "../Component/Authorization/PagesRequest/PagesRequest"
import UserRoles from "../Component/Authorization/UserRoles/UserRoles"
import SignInSide from "../Component/Authantication/SignInSide"
import ProtectedRoute from "./ProtectedRoute"


const Router=()=> {
    return(

    <Switch>
            <Route path="/" exact component={SignInSide}/>
            <ProtectedRoute path="/login"  component={SignInSide}/>
            {/* <ProtectedRoute path="/dashboard" component={Dashboard}/> */}
            <ProtectedRoute path="/newrole" component={NewRole}/>
            <ProtectedRoute path="/newpage"  component={NewPage}/>
            <ProtectedRoute path="/newrequest"  component={NewRequest}/>
            <ProtectedRoute path="/pagesrequests"  component={PagesRequest}/>
            <ProtectedRoute path="/rolespages"  component={RolesPages}/>
            <ProtectedRoute path="/rolespages/:rolId"  component={RolesPages}/>
            <ProtectedRoute path="/userroles"  component={UserRoles}/>
            <ProtectedRoute component={NotFound}/>
     </Switch>    
  
    )
}

export default Router;