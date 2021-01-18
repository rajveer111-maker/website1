import React  from 'react'
import styled from 'styled-components';


function Button(){
 return(
 <Button variant="contained" color="primary">
  Login
 </Button>
)
}
export default Button;
const NavWrapper = styled.div`
.Login {
    width: 63px;
    height: 24px;
    text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.35);
    font-family: Rubik;
    font-size: 25px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }`;