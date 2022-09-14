import { Router, Request, Response } from 'express'
import { UserInput } from '../../db/models/User'
import * as UserController from '../controllers/user'

const userRoute = Router()

userRoute.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const result = await UserController.getById(id)
    return res.status(200).send(result)
})

userRoute.put('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const payload: any = req.body

    const result = await UserController.update(id, payload)
    return res.status(201).send(result)
})

userRoute.delete('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)

    const result = await UserController.deleteById(id)
    return res.status(204).send({})
})

userRoute.post('/', async (req: Request, res: Response) => {
    const payload: UserInput = req.body
    try {
        const result = await UserController.create(payload)
        return res.status(200).send(result)
    }
    catch(error : any) {
        console.log(req.body)
        console.log(error.message)
    }


})

userRoute.get('/', async (req: Request, res: Response) => {
    const results = await UserController.getAll()
    return res.status(200).send(results)
})

export default userRoute