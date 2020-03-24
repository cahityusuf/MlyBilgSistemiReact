import React from "react"
//import MenuIcon from '@material-ui/icons/Menu';

const MaterialIcon = ({ iconName }) => {
    //let iconName = icon.replace(/icon$/, '')
    let resolved = require(`@material-ui/icons/${iconName}`).default
    
    if (!resolved) {
        throw Error(`Could not find material-ui-icons/${iconName}`)
    }

    return React.createElement(resolved)
}

export default MaterialIcon;