import styled from 'styled-components';
import { Container } from '../Container/Container';

export const RegisterCard = styled(Container)`
    flex-direction: column;
    flex-wrap: wrap;
    width: 80%;
    align-content: center;
    justify-content: center;
    border: 2px solid #dfdfdf;
    padding: 20px 0px 30px 0px;
`
export const RegisterSection = styled.div`
    padding: 10% 35% 10% 35%;
`

export const FormWrapper = styled(Container)`
      flex-direction: column;
     
`
export const InputWrapper = styled(Container)`
      flex-direction: row;
      margin-bottom: 5px;  
`

export const Button =styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  color: #555555;
  background-color: #fff;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-top: 5px;  
`