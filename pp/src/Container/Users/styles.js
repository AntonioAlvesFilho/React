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

