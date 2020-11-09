import React, { useEffect } from "react";
import classNames from "classnames";
import { useSelector, useDispatch} from 'react-redux';
import * as G from "../styles/GameBoardStyles";
import { settlements } from "../features/settlementNodeSlice";
import { roads } from "../features/roadNodes";
import { dice, tokens, setDice, setTokens } from "../features/gameMetaDataSlice";

const GameBoard = () => {
    //State Variables
    const dispatch = useDispatch();
    const settlementList = useSelector(settlements);
    const roadList = useSelector(roads);
    let tokenList = useSelector(tokens);
    
    // Set up initial game states
    useEffect(() => {
        let newTokenList = [...tokenList];
        newTokenList = shuffle(newTokenList);
        dispatch(setTokens(newTokenList));
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
    
    return(
        <G.Div>
            <G.Board>
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