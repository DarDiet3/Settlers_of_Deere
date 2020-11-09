import React, { useEffect } from "react";
import Hexagon from "react-hexagon";
import classNames from "classnames";
import { useSelector, useDispatch} from 'react-redux';
import * as G from "../styles/GameBoardStyles";
import { settlements } from "../features/settlementNodeSlice";
import { roads } from "../features/roadNodes";
import { dice, tokens, resource_hexes, setDice, setTokens, setResourceHexes } from "../features/gameMetaDataSlice";
import { hexes, setNumber, setResource, setRobber } from "../features/hexSlice";

const GameBoard = () => {
    //State Variables
    const dispatch = useDispatch();
    const settlementList = useSelector(settlements);
    const roadList = useSelector(roads);
    let tokenList = useSelector(tokens);
    const hexList = useSelector(hexes);
    const resourceHexList = useSelector(resource_hexes);
    const hexStyles = G.StyledHex;
    // Set up initial game states
    useEffect(() => {
        let newTokenList = [...tokenList];
        newTokenList = shuffle(newTokenList);
        let newResourceHexList = [...resourceHexList];
        newResourceHexList = shuffle(newResourceHexList);
        dispatch(setTokens(newTokenList));
        dispatch(setResourceHexes(newResourceHexList));
    }, [])


    const shuffle = (arr) => {
        console.log(arr)
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
    // const newTokenList = shuffle(tokenList)
    // console.log(`tokenList: ${tokenList}`)
    // console.log(`newTokenList: ${newTokenList}`)
    console.log(hexStyles)
    console.log("donEEEEEE")
    return(
        <G.Div>
            <G.Board>
                {hexList.map((hex, index) => {
                    const hexClass = classNames(`hex_${hex.id}`, `${hex.resource}`, "hex");
                    return(
                        <Hexagon
                            key={index}
                            className={hexClass}
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
            </G.Board>
        </G.Div>
    )
}

export default GameBoard;