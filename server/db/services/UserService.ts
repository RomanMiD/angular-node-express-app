
import * as userDal from '../dal/user'
import {GetAllUsersFilters} from '../dal/types'
import {UserInput, UserOuput} from '../models/User'

export const create = async (payload: UserInput): Promise<UserOuput> => {
    return userDal.create(payload)
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOuput> => {
    return userDal.update(id, payload)
}

export const getById = (id: number): Promise<UserOuput> => {
    return userDal.getById(id)
}

export const deleteById = (id: number): Promise<boolean> => {
    return userDal.deleteById(id)
}

export const getAll = (): Promise<UserOuput[]> => {
    return userDal.getAll()
}