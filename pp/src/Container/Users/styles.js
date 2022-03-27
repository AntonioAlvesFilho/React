import styled from 'styled-components'
import background from '../../assets/bgimage.png'

export const Container = styled.div`

background: url("${background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 100%;
min-height: 100%;
`
export const Image = styled.img`
margin-top: 30px;

`


export const Button = styled.button`
width: 342px;
height: 74px;
background: transparent;
border-radius: 14px;
border: 1px solid aliceblue;
margin-top: 132px;
text-decoration: none;

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

&:hover {
    opacity:0.8 ;
}
&:active {
    opacity: 0.5 ;
}

img {
transform: rotate(-180deg);
}
`;

export const Users = styled.li`
display: flex;
justify-content: space-around;
align-items: center;

width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
margin: 18px 0px;
border: none;
outline: none;


font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;


button {
    border: none;
    background: none;
    cursor: pointer;
    

    &:hover{
        opacity: 0.6;
    }

    &:active {
        opacity: 0.8;
    }
}
`

