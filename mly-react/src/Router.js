import {Route, Switch} from "react-router-dom"
import Dashboard from "../src/Component/Root/Dashboard"
import NewRole from "../src/Component/Authorization/Roles/NewRole"
import NewPage from "../src/Component/Authorization/Pages/NewPage"
import NewRequest from "../src/Component/Authorization/Requests/NewRequest"
import RolesPages from "../src/Component/Authorization/RolesPages"
import PagesRequest from "../src/Component/Authorization/PagesRequest"
import UserRoles from "../src/Component/Authorization/UserRoles"


import React from 'react'


function Router() {
    return(
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/newrole" exact component={NewRole}/>
            <Route path="/newpage" exact component={NewPage}/>
            <Route path="/newrequest" exact component={NewRequest}/>
            <Route path="/pagesrequests" exact component={PagesRequest}/>
            <Route path="/rolespages" exact component={RolesPages}/>
            <Route path="/userroles" exact component={UserRoles}/>
        </Switch>
    )
}

export default Router;