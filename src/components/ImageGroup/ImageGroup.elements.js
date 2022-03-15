import styled from 'styled-components';

export const StyledImageMain = styled.img`
    width:100%;
    max-height: 500px;
    border-radius: 5%;
    cursor: pointer;
    /* border: 2px solid #FF7E1B; */
`

export const StyledImageSelector = styled(StyledImageMain)`
    /* border: 2px solid #FF7E1B; */
    width: 100%; /* or any custom size */
    height: 100%;
    border-radius: 5%;
    border-color: none;
    opacity: 1 ;
    &:hover {
        opacity: 0.5 ;
    }
`

export const ImgDiv = styled.div`
    height: 80px;
    border-radius: 5%;
    cursor: pointer;
    &:hover {
      background-color: #FFFFFF;
      border: 2px solid #FF7E1B;
    };
    opacity: 1;
`

export const Gallary = styled.div`
    display: flex;
    flex-direction: row wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 8px;
`

export const ImageWrapper = styled.div`
    width: 40%;
    flex: 1;
    min-width: 400px;
    max-width: 500px;
    /* max-width: 500px; */
    flex-direction: column;
    align-content: center;
    justify-content: center;
    /* margin-left: 180px; */
    /* padding: 50px; */
    /* border: 2px solid #FF7E1B; */
    margin-left: auto;
    margin-right: auto;
`