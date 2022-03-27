import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
background: ${props => props.goBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
border-radius: 14px;
border:  ${props => props.goBack ? '1px solid aliceblue' : 'none'};
margin-top: 132px;

font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;
text-decoration: none;

&:hover {
    opacity:0.8 ;
}
&:active {
    opacity: 0.5 ;
}

img {
    ${props =>props.goBack ? 'transform: rotate(-180deg)' : ''};
};
`