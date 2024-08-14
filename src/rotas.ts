import { Router } from 'express'

const rotas = Router()

rotas.get('/', (req, res) => {
    res.json('OK')
})

export default rotas