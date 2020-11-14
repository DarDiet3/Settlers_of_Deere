import styled from "styled-components";

export const OpponentRow = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    background: #444444;
    font-family: arial;
`

export const OpponentName = styled.h2`
    margin: 3px;
    font-family: arial;
    text-align: center;
    &.white {
        color: white;
    }
    &.red {
        color: red;
    }
    &.blue{
        color: #2D7DD2;
    }
    &.orange{
        color: orange;
    }
`
export const OppCardHolder = styled.div `
    width:: 100%;
    height: 60%;
    display: flex;
    justify-content: space-around;
`
export const OppCardCol = styled.div `
    width: 35%;
    height: 98%;
    background: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid black 1px;
`
export const Vp = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: teal;
    padding: 5px;

    & p {
        margin: 5px;
    }
`
export const Points = styled.p`
    font-size: 20px;
`