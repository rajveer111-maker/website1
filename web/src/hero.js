import React, { Component } from 'react'
import styled from 'styled-components';


const Hero = () => {
    return (
      <HeroWrapper>
      <div>
        <div className="image-head">
          <img src="/img/img1" alt="" />
        </div>
      </div>
      </HeroWrapper>
    )

}
 export default Hero;

const HeroWrapper = styled.div`
.image-head{
display:flex;
width:auto;

}
`;
