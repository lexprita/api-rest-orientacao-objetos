import 'dotenv/config '
import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json('OK')
})

app.listen(process.env.PORT, () => {
    console.log('Servidor inicializado!')
})