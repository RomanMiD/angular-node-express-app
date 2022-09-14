import { Router } from 'express'
import userRoute from './user'

const apiRoute = Router()

apiRoute.use('/user', userRoute)

export default apiRoute