import UserModel from "./models/User"

require('dotenv').config()


const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
    UserModel.sync({ alter: isDev || isTest }),
  ])

export default dbInit 
