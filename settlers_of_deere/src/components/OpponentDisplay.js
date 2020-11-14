import React from "react";
import { useSelector } from "react-redux";
import * as A from "../styles/PlayerAreaStyles";

function OpponentDisplay(props) {
    const player = props.player;

    return(
        <A.OpponentRow>
            <A.OpponentName>{player.username}</A.OpponentName>
            <A.OppCardHolder>
                <A.OppCardCol>
                    {player.specialCards}
                </A.OppCardCol>
                <A.Vp>
                    Victory Points <br/>
                    {player.points}
                </A.Vp>
                <A.OppCardCol>
                    {player.devCards}
                </A.OppCardCol>
            </A.OppCardHolder>
        </A.OpponentRow>
    )
}

export default OpponentDisplay;