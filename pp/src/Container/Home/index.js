import React, { useState, useRef } from "react";
import People from '../../assets/people.png'
import Arrow from '../../assets/arrow.png'

import axios from 'axios'
import H1 from "../../components/Title/index";
import  ContainerIten  from "../../components/ContainerItens/index";
import { Container, Image, InputLabel, Input, Button } from "./styles";
import {useHistory} from "react-router-dom"

const App = () => {
  //const users = []

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  const History = useHistory()

  async function addNewUser() {


    const { data: newUser } = await axios.post("http://localhost:3100/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    console.log(newUser)
    setUsers(...users, newUser)
    History.push("/usuarios")

  }


  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerIten>

        <H1>Ola!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Ex: Clodoaldo" />

        <InputLabel>Idade</InputLabel>
        <Input type="number" ref={inputAge} placeholder="Ex: 25" />

        <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={Arrow} /></Button>

      </ContainerIten>
    </Container>
  );
}

export default App