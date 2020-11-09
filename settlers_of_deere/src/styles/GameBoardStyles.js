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

    & .set_4, .set_5, .set_6, .set_7 {
        grid-row: 3;
    }

    & .set_8, .set_9, .set_10, .set_11 {
        grid-row: 7;
    }

    & .set_12, .set_13, .set_14, .set_15, .set_16 {
        grid-row: 9;
    }

    & .set_17, .set_18, .set_19, .set_20, .set_21 {
        grid-row: 13;
    }

    & .set_22, .set_23, .set_24, .set_25, .set_26, .set_27 {
        grid-row: 15;
    }

    & .set_28, .set_29, .set_30, .set_31, .set_32, .set_33 {
        grid-row: 19;
    }

    & .set_34, .set_35, .set_36, .set_37, .set_38 {
        grid-row: 21;
    }

    & .set_39, .set_40, .set_41, .set_42, .set_43 {
        grid-row: 25;
    }

    & .set_44, .set_45, .set_46, .set_47 {
        grid-row: 27;
    }

    & .set_48, .set_49, .set_50, .set_51 {
        grid-row: 31;
    }

    & .set_52, .set_53, .set_54 {
        grid-row: 33;
    }

    & .set_22, .set_28{
        grid-column: 1;
    }

    & .set_12, .set_17, .set_34, .set_39 {
        grid-column: 3;
    }

    & .set_4, .set_8, .set_23, .set_29, .set_44, .set_48 {
        grid-column: 5;
    }

    & .set_1, .set_13, .set_18, .set_35, .set_40, .set_52 {
        grid-column: 7;
    }

    & .set_5, .set_9, .set_24, .set_30, .set_45, .set_49 {
        grid-column: 9;
    }

    & .set_2, .set_14, .set_19, .set_36, .set_41, .set_53 {
        grid-column: 11;
    }

    & .set_6, .set_10, .set_25, .set_31, .set_46, .set_50 {
        grid-column: 13;
    }

    & .set_3, .set_15, .set_20, .set_37, .set_42, .set_54 {
        grid-column: 15;
    }

    & .set_7, .set_11, .set_26, .set_32, .set_47, .set_51 {
        grid-column: 17;
    }

    & .set_16, .set_21, .set_38, .set_43 {
        grid-column: 19;
    }

    & .set_27, .set_33{
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
    
`

export const SettlementHouse = styled.div`
    border: solid black 1px;

`

export const RoadPiece = styled.div`
    border: solid red 1px;
`