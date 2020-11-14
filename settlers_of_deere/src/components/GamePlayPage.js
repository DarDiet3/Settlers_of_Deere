import React, { useEffect } from "react";
import Hexagon from "react-hexagon";
import classNames from "classnames";
import { useSelector, useDispatch} from 'react-redux';

import * as G from "../styles/GameBoardStyles";
import * as H from "../styles/GeneralStyles";
import Header from "./Header";
import OpponentDisplay from "./OpponentDisplay";
import UserInventory from "./UserInventory";
import GameBoard from "./GameBoard";
import { settlements } from "../features/settlementNodeSlice";
import { roads } from "../features/roadNodes";
import { dice, tokens, resource_hexes, setTokens, setResourceHexes, currentUser } from "../features/gameMetaDataSlice";
import { hexes, setHexData, setRobber } from "../features/hexSlice";
import { players } from "../features/players";


const GamePlayPage = () => {
    //State Variables
    const dispatch = useDispatch();
    const settlementList = useSelector(settlements);
    const roadList = useSelector(roads);
    let tokenList = useSelector(tokens);
    const hexList = useSelector(hexes);
    const resourceHexList = useSelector(resource_hexes);
    const diceSet = useSelector(dice);
    const activeUser = useSelector(currentUser);
    const playerList = useSelector(players);
    const opponents = playerList.filter(n=> n.username !== activeUser.username)
    const activeplayer = playerList.filter(n => n.username === activeUser.username)
    console.log(activeplayer)

    // Game Play Logic
    const setBoard = () => {
        let newTokenList = [...tokenList];
        newTokenList = shuffle(newTokenList);
        let newResourceHexList = [...resourceHexList];
        newResourceHexList = shuffle(newResourceHexList);
        dispatch(setTokens(newTokenList));
        dispatch(setResourceHexes(newResourceHexList));
        for(let i=0; i < newTokenList.length; i++) {
            let payload = {
                index: i,
                number: newTokenList[i],
                resource: newResourceHexList[i]
            }
            dispatch(setHexData(payload))
        }
    }

    const shuffle = (arr) => {
        let oldArr = arr;
        let newArr = [];
        let i = oldArr.length;
        while(i !== 0) {
            let index = Math.floor(Math.random() * oldArr.length);
            newArr.push(oldArr[index]);
            oldArr.splice(index, 1);
            i--;
        } 
        return newArr
    }
 
    //===== START GAME FUNCTION =====
    /**
     * 1. Click Start Game
     * 2. Set Board
     * 3. Disable by setting persistant variable that game has been set
     * 4. All players roll dice
     * -- Disable roll button until it is activeUser's turn
     * ++ Need a state variable for player's turn
     * 5. If players roll is the highest, place first
     * 6. set up snake turn
     */

     //===== GENERAL GAME PLAY ======
     /**
      * 1. Check State for player who is up
      * -- Make that player active, highlight in display
      * -- Send message to that player they are up
      * 2. Player roll's dice to start turn.
      * --Roll button turn into pass dice button
      * ----On click, advances turn to next player
      * 3. Distribute resources
      * ---map through hexes slice, 
      *     If number === total of dice
      *         For each player in users, player.cards.[this hex.resource] ++
      * 3a. If robber:
      *     a. Map all players, if more than 7 cards
      *         -- player must loose floor(n/2) cards
      *             ----Have a pop up that allows them to select number of cards to keep
      *             ----- Have +/- counters for each resource
      *                 Total Counter of cards set aside. Let them know the number
      *                 On submit cards - number ridded
      *                 Don't allow submit with few cards selected and disable + buttons when 
      *                     count is at needed number
      *     b. Allow active player to select hex to place robber
      *         -- set previous robber hex to false and new robber location to true
      * 4. Player Actions Panel Shows
      * ---Build road, build city, build settlement, pass dice (end turn), Buy dev card, play dev cards, trade resources
      * --- On click of build
      *     - 1. Ensure proper number of resources
      *     - 2. Illuminate allowable locations (use logic from manual)
      *     - 3. Add event listener to each of the available locations
      *         -- If active and click and able ... add a road or settlment/city
      *         ---- for now just sdjust shape of road and use color/words
      *     - 4. If city, add the player to appropriate hex players list
      *     - 5. Update appropriate items in the player data slice (left vs played)
      *     - 5. Remove cards
      *     - on any build function, add up VP, check for 10
      *     - on any road build or knight lay, look into longest road / biggest army
      * --- Trade resources
      *     - Check for trading bonus at a port
      *     - Trade 4 to 1 with the bank ... all must be the same.
      *     - + Implement trad with others at a later time
      * 
      */
    
    return(
        <H.BodyContainer>
            <Header />
            <G.Div>
                <G.StartButton onClick={() => setBoard()}>Set Board</G.StartButton>
                <G.Table>
                    <GameBoard/>
                </G.Table>
                <G.PlayerArea>
                    <G.Opponent>
                        {opponents.map((player, index) => {
                            return(<OpponentDisplay player={player} key={index}/>)
                        })}
                    </G.Opponent>
                    <G.UserInventory>
                        <UserInventory player={activeplayer[0]}/>
                    </G.UserInventory>
                </G.PlayerArea>
            </G.Div>
        </H.BodyContainer>
        
    )
}

export default GamePlayPage;