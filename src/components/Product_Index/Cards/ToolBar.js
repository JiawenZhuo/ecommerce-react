import React from 'react';
import { FilterFormDivStyle } from './style';
import {  ContainerRow } from '../../Container/Container';
function ToolBar({setLowToHigh}) {
  

  const handleChange = (event) => {
    if(event.target.value === "Price high to low"){
      setLowToHigh(1);
    }else{
      setLowToHigh(-1);
    }
    console.log(event.target.value);
  }

    const FilterForm = () => {
        return (
          <FilterFormDivStyle>
            <form>
            <select onChange={handleChange}>
              <option value="Price high to low">Price high to low</option>
              <option  value="Price low to high">Price low to high</option>
            </select>
            </form>
          </FilterFormDivStyle>
        );
      };
      
      const TooBarStyle= {
          height: '50px'
      }
    return (
        <ContainerRow style={TooBarStyle}>
            <div>
                <FilterForm />
            </div>
        </ContainerRow>
    );
}

export default ToolBar;