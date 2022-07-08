import * as repository from '../database/repositories/FilmRepository'
import { FilmInput, FilmOutput } from '../database/models/FilmModels';

export const getAll = async (): Promise<FilmOutput[]> => {
    return await repository.getAll();
}

export const getById = async (id:number): Promise<FilmOutput>=> {
    try{
        return await repository.getById(id)
    }catch (error){
        console.log(error)
    }  } 

export const create = async (payload: FilmInput): Promise<FilmOutput> => {
    return await repository.create(payload)
}

export const updateById = async (id:number, payload: FilmInput):Promise<FilmOutput> =>{
    return await repository.updateById(id, payload);
};

export const deleteById = async (id:number):Promise<void> =>{
    await repository.deleteById(id);
};