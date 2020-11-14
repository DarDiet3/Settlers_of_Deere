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
    background: #FFDE00;
    padding: 5px;

    & p {
        margin: 5px;
    }
`
export const Points = styled.p`
    font-size: 20px;
    text-align: center;
`

export const InventoryCont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #444444;
    font-family: arial;
`
export const InventoryRow = styled.div`
    height: 25%;
    width: 98%;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Inventory2 = styled(InventoryRow)`
    height: 40%;
    display: flex:
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`
export const Inventory3 = styled.div`
    height: 20%;
    width: 98%;
    padding: 5px;
`
export const Inventory4 = styled.div`
    height: 20%;
    width: 98%;
    padding: 5px;
`
export const ResourceDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    height: 95%;
    width: 15%;
    padding: 5px;
    background: #f6f6f6;
    border: solid black 1px;
    border-radius: 6px;
`

export const ResourceImg = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid black 2px;
    border-radius: 6px;
    &.wheat {
        background: tan;
    }
    &.brick {
        background: red;
    }
    &.wood {
        background: brown;
    }
    &.rock {
        background: darkgray
    }
    &.sheep {
        background: white;
    }
`

export const ResourceTitle = styled.h3`
    margin: 0;
`

export const BuildingDisplay = styled(ResourceDisplay)`
    width: 20%;
    border-radius: 0;
`

export const BuildingTitle = styled.h3`
    margin: 0;
`

export const ActiveDev = styled(OppCardCol)`
    width: 30%;
    height: 95%;
    padding: 5px;
`