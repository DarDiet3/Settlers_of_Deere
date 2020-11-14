import React from "react";
import { useSelector } from "react-redux";
import * as A from "../styles/PlayerAreaStyles";
import { currentUser } from "../features/gameMetaDataSlice";

function UserInventory(props) {
    const player = props.player;

    return(
        <A.InventoryCont>
            <A.InventoryRow>
                <A.Vp>
                    <p>Victory Points</p>
                    <A.Points>{player.points}</A.Points>
                </A.Vp>
                <A.OppCardCol>
                    {player.specialCards.length !== 0 ? player.specialCards : "No extra VP"}
                </A.OppCardCol>
                <A.OppCardCol>
                    {player.devCards.length !== 0 ? player.devCards : "No Dev Cards Played"}
                </A.OppCardCol>
            </A.InventoryRow>
            <A.Inventory2>
                <A.ResourceDisplay>
                    <A.ResourceImg className="wheat">
                        <A.ResourceTitle>Wheat</A.ResourceTitle>
                    </A.ResourceImg>
                    <A.Points>
                        {player.cards.wheat}
                    </A.Points>
                </A.ResourceDisplay>
                <A.ResourceDisplay>
                    <A.ResourceImg className="brick">
                        <A.ResourceTitle>Brick</A.ResourceTitle>
                    </A.ResourceImg>
                    <A.Points>
                        {player.cards.brick}
                    </A.Points>
                </A.ResourceDisplay>
                <A.ResourceDisplay>
                    <A.ResourceImg className="wood">
                        <A.ResourceTitle>Wood</A.ResourceTitle>
                    </A.ResourceImg>
                    <A.Points>
                    {player.cards.wood}
                    </A.Points>
                </A.ResourceDisplay>
                <A.ResourceDisplay>
                    <A.ResourceImg className="rock">
                        <A.ResourceTitle>Rock</A.ResourceTitle>
                    </A.ResourceImg>
                    <A.Points>
                        {player.cards.rock}
                    </A.Points>
                </A.ResourceDisplay>
                <A.ResourceDisplay>
                    <A.ResourceImg  className="sheep">
                        <A.ResourceTitle>Sheep</A.ResourceTitle>
                    </A.ResourceImg>
                    <A.Points>
                        {player.cards.sheep}
                    </A.Points>
                </A.ResourceDisplay>
            </A.Inventory2>
            <A.InventoryRow>
                <A.ActiveDev>
                    {player.devCards.length !== 0 ? player.devCards : "No Dev Cards"}
                </A.ActiveDev>
                <A.BuildingDisplay>
                    <A.ResourceImg>
                        <A.BuildingTitle>
                            Roads
                        </A.BuildingTitle>
                    </A.ResourceImg>
                    <A.Points>
                        {player.roads_unplayed}
                    </A.Points>
                </A.BuildingDisplay>
                <A.BuildingDisplay>
                    <A.ResourceImg>
                        <A.BuildingTitle>
                            Settlements
                        </A.BuildingTitle>
                    </A.ResourceImg>
                    <A.Points>
                        {player.settlements_unplayed}
                    </A.Points>
                </A.BuildingDisplay>
                <A.BuildingDisplay>
                    <A.ResourceImg>
                        <A.BuildingTitle>
                            Cities
                        </A.BuildingTitle>
                    </A.ResourceImg>
                    <A.Points>
                        {player.cities_unplayed}
                    </A.Points>
                </A.BuildingDisplay>
            </A.InventoryRow>
        </A.InventoryCont>
    )
}

export default UserInventory;