import styled from 'styled-components';

export const  Container = styled.div`
    display: flex;
    flex-direction: column wrap;
    width: 80%;
    margin-top: 21px;
    margin-left: auto;
    margin-right: auto;
    /* border: 2px solid #FF7E1B; */
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    /* border: 0; */
    outline:none;
   
`
export const  ContainerRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 80%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    border: none;
    /* border: 1px red solid; */
`

export const flexRowWrapper = styled.div`
    display: flex; 
    justify-content: flex-start;
    flex-direction: row;
`