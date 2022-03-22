import React, { useState, useRef } from "react";
import People from '../../assets/people.png'
import Arrow from '../../assets/arrow.png'

import axios from 'axios'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from "./styles";

const App = () => {
  //const users = []

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3100/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
console.log(newUser) 
    setUsers(...users, newUser)

  }


  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItens>

        <H1>Ola!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Ex: Clodoaldo" />

        <InputLabel>Idade</InputLabel>
        <Input type="number" ref={inputAge} placeholder="Ex: 25" />

        <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={Arrow} /></Button>


      </ContainerItens>
    </Container>
  );
}

export default App