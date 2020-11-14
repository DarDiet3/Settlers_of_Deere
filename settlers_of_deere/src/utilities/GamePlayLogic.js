import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch} from 'react-redux';

import { settlements } from "../features/settlementNodeSlice";
import { roads } from "../features/roadNodes";
import { dice, tokens, resource_hexes, setDice, setTokens, setResourceHexes, rollDice, currentUser } from "../features/gameMetaDataSlice";
import { hexes, setHexData, setRobber } from "../features/hexSlice";
import { players } from "../features/players";



//Set Board on initial game start
export const SetBoard = (listToken, listResource) => {
    const dispatch = useDispatch();
    const [tokenList, setTokenList] = useState([listToken])
    let newTokenList = [...tokenList];
    newTokenList = Shuffle(newTokenList);
    let newResourceHexList = [...listResource];
    newResourceHexList = Shuffle(newResourceHexList);
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

//Shuffle Array
export const Shuffle = (arr) => {
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


export const Roll = () => {
    const dispatch = useDispatch();
    const dice1 = Math.floor(Math.random() * 6 ) + 1;
    const dice2 = Math.floor(Math.random() * 6 ) + 1;
    let newDice = [dice1, dice2]
    console.log(newDice)
    dispatch(setDice(newDice))
}