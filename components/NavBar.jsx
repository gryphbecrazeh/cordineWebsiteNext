// -----------------------------------------Next-----------------------------------------
// -----------------------------------------Reactstrap-----------------------------------------
import { Nav, NavLink, NavItem } from "reactstrap";
// -----------------------------------------React-----------------------------------------
import React from "react";

const NavBar=() => {
    return (
        <div className="nav-container bg-light">
            <Nav>
                <NavItem>
                    <NavLink href="/">
                        Home
            </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">
                        Front End
            </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">
                        Projects
            </NavLink>
                </NavItem>

            </Nav>
            <style jsx>
                { `
                .nav-container{
                    position:sticky;
                    top:0;
                }
            `}
            </style>
        </div>
    )
}
export default NavBar