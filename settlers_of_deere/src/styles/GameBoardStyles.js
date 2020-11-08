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
`