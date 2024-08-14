import { Router } from 'express'
import AutorControlador from './controladores/AutorControlador'

const rotas = Router()

const autorControlador = new AutorControlador()

rotas.get('/autores', autorControlador.listar)

rotas.get('/autores/:id', autorControlador.detalhar)

export default rotas