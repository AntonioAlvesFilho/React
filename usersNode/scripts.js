const express = require('express')
const uuid = require(`uuid`)
const cors = require('cors')

const app = express( )
app.use(express.json())
app.use(cors())



let users =[]

const chuckUserId = (request, response, next) => {

    const {id} = request.params

    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(404).json({error: "User not found"})
    }

    request.userIndex = index
    


    next()
}

app.get('/users', (request, response) => {

    return response.json(users)
})

app.post('/users', (request, response) => {
    
    try {
    const {name, age} = request.body

    const user = {name, age, id:uuid.v4()}

    if (name == "" || age ==  "") throw Error('complete Age and Name fields')
    users.push(user)

    return response.status(201).json(users)
    }
    catch (err) {
        return response.status(500).json({error:err.message})
    }
})

app.put('/users/:id', chuckUserId,  (request, response) => {
    const {name, age} = request.body
    const index = request.userIndex
    const id = request.userId

    const updateUser = { id, name, age }

   users[index] = updateUser

    return response.json(updateUser)
})

app.delete('/users/:id', chuckUserId,  (request, response) => {

    const index = request.userIndex

    users.splice(index,1)

    return response.status(204).json("User deleted")
})



app.listen(3100, () => {
    console.log('😉 server started on port 3100')
})
