import React from "react";
import './Nav.scss';
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/home" exact={true} activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/practices" activeClassName="active">
                    News
                </NavLink>
                <NavLink to="/myComponent" activeClassName="active">
                    Contact
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    User
                </NavLink>
                <NavLink to="/myLoading" activeClassName="active">
                    Show Loading
                </NavLink>
            </div>
        )
    }
}

export default Nav;