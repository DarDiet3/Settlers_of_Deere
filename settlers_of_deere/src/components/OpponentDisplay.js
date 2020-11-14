import React from "react";
import * as A from "../styles/PlayerAreaStyles";

function OpponentDisplay(props) {
    const player = props.player;

    return(
        <A.OpponentRow>
            <A.OpponentName className={player.color}>{player.username}</A.OpponentName>
            <A.OppCardHolder>
                <A.OppCardCol>
                    {player.specialCards.length !== 0 ? player.specialCards : "No extra VP"}
                </A.OppCardCol>
                <A.Vp>
                    <p>Victory Points</p>
                    <A.Points>{player.points}</A.Points>
                </A.Vp>
                <A.OppCardCol>
                    {player.devCards.length !== 0 ? player.devCards : "No Dev Cards Played"}
                </A.OppCardCol>
            </A.OppCardHolder>
        </A.OpponentRow>
    )
}

export default OpponentDisplay;