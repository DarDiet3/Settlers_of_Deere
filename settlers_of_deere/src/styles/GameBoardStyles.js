import Hexagon from "react-hexagon";
import styled from "styled-components";


export const Div = styled.div`
    display: flex;
    width: 100%;
    height: 85vh;
    background: gray;
    align-items: center;
    justify-content: center;
    
`

export const Board = styled.div`
    display: grid;
    width: 525px;
    height: 480px;
    grid-template-columns: repeat(21, minmax(0, 2.25%));
    grid-template-rows: repeat(33, minmax(0, 2.25%));
    gap: .875% 2.75%;
    background: white;
    

    & .set_1, .set_2, .set3 {
        grid-row: 1;
    }

    & .road_1, .road_2, .road_3, .road_4, .road_5, .road_6{
        grid-row: 2;
    }

    & .set_4, .set_5, .set_6, .set_7 {
        grid-row: 3;
    }

    & .road_7, .road_8, .road_9, .road_10, .token_1, .token_2, .token_3, .hex_1, .hex_2, .hex_3{
        grid-row: 5;
    }

    & .set_8, .set_9, .set_10, .set_11 {
        grid-row: 7;
    }

    & .road_11, .road_12, .road_13, .road_14, .road_15, .road_16, .road_17, .road_18{
        grid-row: 8;
    }

    & .set_12, .set_13, .set_14, .set_15, .set_16 {
        grid-row: 9;
    }

    & .road_19, .road_20, .road_21, .road_22, .road_23, .token_4, .token_5, .token_6, .token_7, .hex_4, .hex_5, .hex_6, .hex_7{
        grid-row: 11;
    }

    & .set_17, .set_18, .set_19, .set_20, .set_21 {
        grid-row: 13;
    }

    & .road_24, .road_25, .road_26, .road_27, .road_28, .road_29, .road_30, .road_31, .road_32, .road_33{
        grid-row: 14;
    }

    & .road_34, .road_35, .road_36, .road_37, .road_38, .road_39, .token_8, .token_9, .token_10, .token_11, .token_19, .hex_8, .hex_9, .hex_19, .hex_10, .hex_11{
        grid-row: 17;
    }

    & .set_22, .set_23, .set_24, .set_25, .set_26, .set_27 {
        grid-row: 15;
    }

    & .set_28, .set_29, .set_30, .set_31, .set_32, .set_33 {
        grid-row: 19;
    }

    & .road_40, .road_41, .road_42, .road_43, .road_44, .road_45, .road_46, .road_47, .road_48, .road_49{
        grid-row: 20;
    }

    & .set_34, .set_35, .set_36, .set_37, .set_38 {
        grid-row: 21;
    }

    & .road_50, .road_51, .road_52, .road_53, .road_54, .token_12, .token_13, .token_14, .token_15, .hex_12, .hex_13, .hex_14, .hex_15{
        grid-row: 23;
    }

    & .set_39, .set_40, .set_41, .set_42, .set_43 {
        grid-row: 25;
    }

    & .road_55, .road_56, .road_57, .road_58, .road_59, .road_60, .road_61, .road_62{
        grid-row: 26;
    }

    & .set_44, .set_45, .set_46, .set_47 {
        grid-row: 27;
    }

    & .road_63, .road_64, .road_65, .road_66, .token_16, .token_17, .token_18, .hex_16, .hex_17, .hex_18{
        grid-row: 29;
    }

    & .set_48, .set_49, .set_50, .set_51 {
        grid-row: 31;
    }

    & .road_67, .road_68, .road_69, .road_70, .road_71, .road_72{
        grid-row: 32;
    }

    & .set_52, .set_53, .set_54 {
        grid-row: 33;
    }

// Set Grid Columns

    & .set_22, .set_28, .road_34{
        grid-column: 1;
    }

    & .road_24, .road_40 {
        grid-column: 2;
    }

    & .set_12, .set_17, .set_34, .set_39, .road_19, .road_50, .token_8, .hex_8 {
        grid-column: 3;
    }

    & .road_11, .road_25, .road_41, .road_55 {
        grid-column: 4;
    }

    & .set_4, .set_8, .set_23, .set_29, .set_44, .set_48, .road_7, .road_35, .road_63, .token_4, .token_12, .hex_4, .hex_12 {
        grid-column: 5;
    }

    & .road_1, .road_12, .road_26, .road_42, .road_56, .road_67 {
        grid-column: 6;
    }

    & .set_1, .set_13, .set_18, .set_35, .set_40, .set_52, .road_20, .road_51, .token_1, .token_9, .token_16, .hex_1, .hex_9, .hex_16 {
        grid-column: 7;
    }

    & .road_2, .road_13, .road_27, .road_43, .road_57, .road_68 {
        grid-column: 8;
    }

    & .set_5, .set_9, .set_24, .set_30, .set_45, .set_49, .road_8, .road_36, .road_64, .token_5, .token_13, .hex_5, .hex_13 {
        grid-column: 9;
    }

    & .road_3, .road_14, .road_28, .road_44, .road_58, .road_69 {
        grid-column: 10;
    }

    & .set_2, .set_14, .set_19, .set_36, .set_41, .set_53, .road_21, .road_52, .token_2, .token_17, .token_19, .hex_2, .hex_17, .hex_19 {
        grid-column: 11;
    }

    & .road_4, .road_15, .road_29, .road_45, .road_59, .road_70 {
        grid-column: 12;
    }

    & .set_6, .set_10, .set_25, .set_31, .set_46, .set_50, .road_9, .road_37, .road_65, .token_6, .token_14, .hex_6, .hex_14 {
        grid-column: 13;
    }

    & .road_5, .road_16, .road_30, .road_46, .road_60, .road_71 {
        grid-column: 14;
    }

    & .set_3, .set_15, .set_20, .set_37, .set_42, .set_54, .road_22, .road_53, .token_3, .token_10, .token_18, .hex_3, .hex_10, .hex_18 {
        grid-column: 15;
    }

    & .road_6, .road_17, .road_31, .road_47, .road_61, .road_72 {
        grid-column: 16;
    }

    & .set_7, .set_11, .set_26, .set_32, .set_47, .set_51, .road_10, .road_38, .road_66, .token_7, .token_15, .hex_7, .hex_15 {
        grid-column: 17;
    }

    & .road_18, .road_32, .road_48, .road_62 {
        grid-column: 18;
    }

    & .set_16, .set_21, .set_38, .set_43 , .road_23, .road_54, .token_11, .hex_11{
        grid-column: 19;
    }

    & .road_33, .road_49 {
        grid-column: 20;
    }

    & .set_27, .set_33, .road_39 {
        grid-column: 21;
    }

    & .white{
        background: white;
    }

    & .red {
        background: red;
    }

    & .blue {
        background: blue;
    }
    
    & .orange {
        background: orange
    }
    & .token {
        justify-self: center;
        align-self: center;
    }
    & .hex {
        width: 925%;
        justify-self: center;
        align-self: center;
    }
`

export const SettlementHouse = styled.div`
    border: solid black 1px;
    width: 100%;
    height: 100%;
`

export const RoadPiece = styled.div`
    border: solid red 1px;
    width: 100%;
    height: 100%;
`

export const NumberToken = styled.div`
    display: flex;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: solid darkgray 1px;
    background: lightgray;
    color: green;
    align-items: center;
    justify-content: center;
    z-index: 1;

`

export const StyledHex = {
    fill: "yellow",
    strokeWidth: "25",
    stroke: "green"

}
    
export const Dice = styled.div`
    width: 75px;
    height: 75px;
    color: yellow;
    background: green;
    border-radius: 4px;
`

