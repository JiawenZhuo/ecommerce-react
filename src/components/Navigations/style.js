import styled from 'styled-components';

export const StyledLink= styled.button`
    color: #69707D;
    background-color: #FFFFFF;
    border: none;
    list-style-type: none;
    font-size :15px;
    font-family: 'Montserrat', sans-serif;
    margin: auto;
    font-weight: 400;
    &:hover {
        border-bottom: 3px solid #FF7E1B;
        padding-bottom: 57px;
    };
    cursor: pointer;
`;

export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row wrap;
    justify-content: space-around;
    width: 397px;
    height: 26px;
    margin-right: 5px;
`
export const NavLeft = styled.div`
    display: flex;
    flex-direction: row wrap;
    justify-content: space-around;
    align-items: center;
    Height: 26px;
`;

export const NavRight = styled.div`
    display: flex;
    flex-direction: row wrap;
    align-items: center;
    justify-content: flex-end;
    Height: 26px;
`

export const Nav = styled.div`
    display: flex;
    flex-direction: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 10%;
    padding-right: 10%;
    height: 100px;
`
export const StyledLine = styled.hr`
    color: rgba(0, 0, 0, 0.65);
    margin: 5px 10% 0 10%;
`