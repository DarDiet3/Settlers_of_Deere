import React from "react";

import * as L from "../styles/LobbyStyles";
import Header from "../components/Header";

const Lobby = () => {

    return(
        <div>
            <Header/>
            <L.BodyContainer>
                <L.LeftDiv>
                    <h2>How to Play</h2>
                </L.LeftDiv>
                <L.RightDiv>
                    <L.FriendBox>
                        <L.SmallHeader>Friend's Online</L.SmallHeader>
                        <L.FriendList>
                            
                        </L.FriendList>
                    </L.FriendBox>
                    <L.GameListBox>
                        <L.SmallHeader>Join a Game</L.SmallHeader>
                    </L.GameListBox>
                </L.RightDiv>
            </L.BodyContainer>
        </div>
       
    )
}

export default Lobby;