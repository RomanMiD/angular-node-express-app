require('dotenv').config()
import { Dialect, Sequelize } from 'sequelize'

const isTest = process.env.NODE_ENV === 'test'


const sequelizeConnection = new Sequelize(
  isTest ? process.env.TEST_DB_NAME as string : process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DRIVER as Dialect,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  })
export default sequelizeConnection
