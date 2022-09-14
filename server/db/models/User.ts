import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../config'

interface UserAttributes {
    id: number
    firstname: string
    lastname: string
    number: string
    address: string
    sex: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}


export interface UserInput extends UserAttributes { }
export interface UserOuput extends UserAttributes { }

class UserModel extends Model<UserAttributes, UserInput> implements UserAttributes {
    id!: number
    firstname!: string
    lastname!: string
    number!: string
    address!: string
    sex!: string

    // timestamps!
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt!: Date
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING
    },
    number:{
        type: DataTypes.STRING
    },
    sex: {
        type: DataTypes.STRING
    }
     

}, {
    sequelize: sequelizeConnection,
    paranoid: true
})
export default UserModel