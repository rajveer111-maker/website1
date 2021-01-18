import React  from 'react'
import styled from 'styled-components';

function Nav(props)  {
    console.log("props recirved",props.data)
     
        return (
            <NavWrapper>
            <div className="rectangle-52">
            <div className="Color-Fill-2"> Raindrop 
            <div className="Solutions-Services-About-Us-Contact-Us-Why-Raindrop"> 
                 <a href="#soluction">soluctions</a>
                 <a href="#services">Services</a>
                 <a href="#About">AboutUs</a>
                 <a href="#Why Raindrop">WhyRaindrop</a> 
                </div>
                </div>  
            
               
            </div>
            </NavWrapper>
        );
    
}


export default Nav;
const NavWrapper = styled.div`
.rectangle-52{
    width: 100%;
    height: auto;
    margin: 0 3px 206px 0;
    padding: 6px 47px 9px 76px;
    background-color: #ff0000;
}
.Color-Fill-2{
    width: 100%;
    height: 92px;
    margin: 0 89px 0 0;
    background-color: #34a1d5;
}

.Solutions-Services-About-Us-Contact-Us-Why-Raindrop {
    word-spacing: 200px;
    width: 100%;
    height: 23px;
    margin: 30px 45px 7px 89px;
    font-family: Rubik;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0;
    letter-spacing: 0.7px;
    text-align: center;
    color: #0e0e0e;
   
    
}

    
`;
 







  