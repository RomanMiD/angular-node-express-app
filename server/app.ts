import express, { Application, Request, Response } from 'express'

import apiRoute from './api/routes'
import dbInit from './db/init'
import path from "path"
import cors from "cors"
dbInit()

const port = process.env.PORT || 3000

export const get = () => {
    const app: Application = express()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use('/api', apiRoute)
    app.use(express.static(path.join(__dirname, "/client")))
    return app
}

export const start = () => {
    const app = get()
    try {
        app.listen(port, () => {
            console.log(`Server running on the:${port}`)
        })
    } catch (error: any) {
        console.log(`Error occurred: ${error.message}`)
    }
}

start()
    
