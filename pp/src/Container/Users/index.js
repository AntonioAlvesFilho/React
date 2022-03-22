import React, { useState, useEffect } from "react";
import User from '../../assets/users.png'
import Arrow from '../../assets/arrow.png'
import Trash from "../../assets/trash.png"
import axios from 'axios'
import { Container, Image, ContainerItens, H1, Button, Users } from "./styles";

const Usuarios = () => {
  //const users = []

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUsers () {

      const {data: newUsers} = await axios.get("http://localhost:3100/users")
      setUsers(newUsers)

    }
    
    fetchUsers()
  }, [])

  async function deleteUser (userId) {
    
    await axios.delete(`http://localhost:3100/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)//usando filter com user id colocado la no botao trash para poder deletar um usuario

    setUsers(newUsers)
  }

  return (
    <Container>
      <Image alt="logo-img" src={User} />
      <ContainerItens>

        <H1>Usuários</H1>



        <ul>
          {users.map((user) => (
            <Users key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button>
            </Users>
          ))}
        </ul>

        <Button><img alt='seta' src={Arrow}/>Voltar</Button>


      </ContainerItens>
    </Container>
  );
}

export default Usuarios