import React, {useState, useRef} from "react";
import People from './assets/people.png'
import Arrow from './assets/arrow.png'
import Trash from "./assets/trash.png"

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User} from "./styles";

const App = () => {
//const users = []

const [ users,setUsers] = useState([]);
const inputName = useRef()
const inputAge = useRef()

const addNewUser = () => {
  setUsers([... users,{id:Math.random(), name: inputName.current.value, age: inputAge.current.value}])
}

const deleteUser = (userId) => {
  const newUsers = users.filter((user) => user.id !== userId)//usando filter com user id colocado la no botao trash para poder deletar um usuari
  
  setUsers(newUsers)
}

  return (
  <Container>
    <Image alt="logo-img" src={People}/>
    <ContainerItens>

      <H1>Ola!</H1>

      <InputLabel>Nome</InputLabel>
      <Input ref={inputName} placeholder="Ex: Clodoaldo"/>

      <InputLabel>Idade</InputLabel>
      <Input type="number" ref={inputAge} placeholder="Ex: 25"/>

      <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={Arrow}/></Button>
      
      <ul>
{users.map((user) => (
  <User key ={user.id}>
  <p>{user.name}</p> <p>{user.age}</p>
  <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo"/></button>
  </User>
))}
      </ul>
    
    </ContainerItens>
  </Container>
  );
}

export default App