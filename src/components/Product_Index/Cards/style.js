import styled from 'styled-components';

export const ShoeImg =  styled.div`
   background-image: url(${props=> props.src ? props.src : "none"});
   background-size: 250px;
   width: 250px;
   height: 250px;
`

export const ShoeDes = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
    width: 250px;
    text-align: center;
`

export const NameTag = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
    width: 250px;   
    font-weight: 500;
    font-size: 1.2em ;
`
export const CompanyTag =styled.div`
    width: 250px;
`

export const CardStyle =styled.div`
    margin: 10px 15px 10px 15px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`

export const FilterFormDivStyle = styled.div`
    position: absolute;
    right: 500px;
    border: 1px red solid;
    
`