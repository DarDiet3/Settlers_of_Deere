import React from "react";
import * as L from "../styles/LandingPageStyles";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
            <L.Div>
                <L.Modal>
                    <h1>Welcome to Settlers of Deere!</h1>
                    <h2>Can you build the leading product line?</h2>
                    <div>
                        <Link to="signup">Sign Up</Link> or <Link to="/login">Log In</Link> to continue!
                    </div>
                </L.Modal>
            </L.Div>
    )
}

export default LandingPage;