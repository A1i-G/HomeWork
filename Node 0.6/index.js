const express = require("express")
require('dotenv').config()
const bodyParser = require("body-parser")
require("colors")

const app = express()
app.use(bodyParser.json())

let users = [
    {
        id: 1,
        username: 'Ali'
    },
    {
        id: 2,
        username: 'Vali'
    },
    {
        id: 3,
        username: 'Abbas'
    },

]


app.get('/', (req, res) => {
    res.json(users)
})

app.delete('/:id', (req, res) => {
    const { id } = req.params
    users = users.filter((item) => item.id != id)
    res.json("user Deleted")
})

app.post('/', (req, res) => {
    const userBody = req.body
    users.push(userBody)
    res.send("users Added")
})


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Serv runs: http://localhost:${PORT}`.green.bold))





















