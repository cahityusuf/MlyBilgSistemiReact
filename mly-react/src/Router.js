import React from 'react'
import {Route, Switch} from "react-router-dom"
import NotFound from "./Component/Common/NotFound"
import Dashboard from "../src/Component/Root/Dashboard"
import NewRole from "../src/Component/Authorization/Roles/NewRole"
import NewPage from "../src/Component/Authorization/Pages/NewPage"
import NewRequest from "../src/Component/Authorization/Requests/NewRequest"
import RolesPages from "./Component/Authorization/RolesPages/RolesPages"
import PagesRequest from "./Component/Authorization/PagesRequest/PagesRequest"
import UserRoles from "../src/Component/Authorization/UserRoles"


function Router() {
    return(
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/dashboard"  component={Dashboard}/>
            <Route path="/newrole"  component={NewRole}/>
            <Route path="/newpage"  component={NewPage}/>
            <Route path="/newrequest"  component={NewRequest}/>
            <Route path="/pagesrequests"  component={PagesRequest}/>
            <Route path="/rolespages"  component={RolesPages}/>
            <Route path="/rolespages/:rolId"  component={RolesPages}/>
            <Route path="/userroles"  component={UserRoles}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Router;