import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch} from 'react-redux';
import * as G from "../styles/GameBoardStyles";
import { settlements } from "../features/settlementNodeSlice";
import { roads } from "../features/roadNodes";

const GameBoard = () => {
    const dispatch = useDispatch();
    const settlementList = useSelector(settlements);
    const roadList = useSelector(roads);

    console.log(roadList)
    return(
        <G.Div>
            <G.Board>
                {settlementList.map((settlement, index) => {
                    const settleClass = classNames(`set_${settlement.id}`, `${settlement.color}`);
                    console.log(settleClass)
                    return(
                        <G.SettlementHouse
                        key={index}
                        className={settleClass}
                        >

                        </G.SettlementHouse>
                        )
                })}

            </G.Board>
        </G.Div>
    )
}

export default GameBoard;