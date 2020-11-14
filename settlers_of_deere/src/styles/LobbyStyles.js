import styled from "styled-components";


export const BodyContainer = styled.div`
    width: calc(100vw - 30px);
    height: 85vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`


export const LeftDiv = styled.div`
    width: 57%;
    height: 95%;
    border: solid black 1px;
    padding: 15px;
`

export const RightDiv = styled.div`
    width: 36%;
    height: 95%;
    border: solid black 1px;
    padding: 15px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-between;
`

export const FriendBox = styled.div`
    height: 30%;
    width: 100%;
    dispaly: flex;
    flex-flow: column wrap;
    border: solid black 2px;
    align-items: center;
`
export const FriendList = styled.div`

`

export const GameListBox = styled.div`
    height: 65%;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: solid black 2px;
`

export const SmallHeader = styled.h2`
    margin: 0;
    font-family: arial;
    text-align: center;
`
