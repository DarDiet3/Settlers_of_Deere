import React, { useEffect } from "react";
import Hexagon from "react-hexagon";
import classNames from "classnames";
import { useSelector, useDispatch} from 'react-redux';

import * as G from "../styles/GameBoardStyles";
import * as H from "../styles/GeneralStyles";
import Header from "./Header";
import OpponentDisplay from "./OpponentDisplay";

import { settlements } from "../features/settlementNodeSlice";
import { roads } from "../features/roadNodes";
import { dice, tokens, resource_hexes, setDice, setTokens, setResourceHexes, rollDice, currentUser } from "../features/gameMetaDataSlice";
import { hexes, setHexData, setRobber } from "../features/hexSlice";
import { players } from "../features/players";


const GameBoard = () => {
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
    console.log(playerList)
    console.log(opponents)

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

    let tokenIndex = 1;
    let robberClass = classNames("token_19", "token", "robber");
    
    const roll = () => {
        const dice1 = Math.floor(Math.random() * 6 ) + 1;
        const dice2 = Math.floor(Math.random() * 6 ) + 1;
        let newDice = [dice1, dice2]
        console.log(newDice)
        dispatch(setDice(newDice))
    }
 
    return(
        <H.BodyContainer>
            <Header />
            <G.Div>
                <G.StartButton onClick={() => setBoard()}>Set Board</G.StartButton>
                <G.Table>
                    <G.Board>
                        {hexList.map((hex, index) => {
                            const hexClass = classNames(`hex_${hex.id}`, `${hex.resource}`, "hex");
                            const hexStyles = {
                                strokeWidth: "25",
                                stroke: "green",
                                fill: hex.resource === "wheat" ? "tan" : 
                                    hex.resource === "brick" ? "red" :
                                    hex.resource === "wood" ? "brown" :
                                    hex.resource === "rock" ? "darkgray" : 
                                    hex.resource === "sheep" ? "white" : "yellow"
                            }
                            return(
                                <Hexagon
                                    key={index}
                                    className={hexClass}
                                    hexProps={{className:`${hex.resource}`}}
                                    style={hexStyles}
                                    ></Hexagon>
                            )
                        })}
                        {settlementList.map((settlement, index) => {
                            const settleClass = classNames(`set_${settlement.id}`, `${settlement.color}`);
                            return(
                                <G.SettlementHouse
                                key={index}
                                className={settleClass}
                                >

                                </G.SettlementHouse>
                                )
                        })}

                        {roadList.map((road, index) => {
                            const roadClass = classNames(`road_${road.id}`, `${road.owner.color}`);
                            return(
                                <G.RoadPiece
                                    key={index}
                                    className={roadClass}
                                    ></G.RoadPiece>
                            )
                        })}

                        {tokenList.map((token, index) => {
                            const tokenClass = classNames(`token_${tokenIndex}`, "token")
                            tokenIndex++;
                            return(
                                <G.NumberToken
                                    key={index}
                                    className={tokenClass}>
                                        {token}
                                </G.NumberToken>
                            )
                        })}
                        <G.NumberToken
                            className={robberClass}
                        >
                            {hexList[18] ? 
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/><path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/></svg>
                        :
                        ""
                        }
                        </G.NumberToken>
                        <G.DieHolder className="dieHolder">
                            <G.Dice className="dice1">{diceSet[0]}</G.Dice>
                            <G.Dice className="dice2">{diceSet[1]}</G.Dice>
                            <G.Button className="roll" onClick={() => roll()}>Roll!</G.Button>
                        </G.DieHolder>
                    </G.Board>
                </G.Table>
                <G.PlayerArea>
                    <G.Opponent>
                        {opponents.map((player, index) => {
                            return(<OpponentDisplay player={player} key={index}/>)
                        })}
                    </G.Opponent>
                    <G.UserInventory>

                    </G.UserInventory>
                </G.PlayerArea>
            </G.Div>
        </H.BodyContainer>
        
    )
}

export default GameBoard;