import React from "react";
import { useSelector } from "react-redux";
import * as H from "../styles/GeneralStyles";
import { Link } from "react-router-dom";
import { currentUser } from "../features/gameMetaDataSlice";



const Header = () => {
    const activeUser = useSelector(currentUser);
    return (
        <H.Header>
            <H.NavBar>
                <H.NavButton>
                    <Link to="/">
                    {/* Link to the lobby page eventually */}
                    Lobby
                    </Link>
                </H.NavButton>
                <H.NavButton>
                    <Link to="/profile/"></Link>
                </H.NavButton>
            </H.NavBar>
            
        </H.Header>
    )
}

export default Header;