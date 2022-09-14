import {User} from '../../interfaces'
import { UserOuput } from '../../../db/models/User'

export const toUser = (user: UserOuput): User => {
    return {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
        number: user.number,
        sex: user.sex
    }
}