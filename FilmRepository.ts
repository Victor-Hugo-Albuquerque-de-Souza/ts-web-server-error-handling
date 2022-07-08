import Film, { FilmInput, FilmOutput } from '../../api/models/FilmModels'
import { AppError } from '../../utils/AppError';

export const getAll = async (): Promise<FilmOutput[]> =>{
    return await Film.findAll();
}

export const getById = async (id:number): Promise<FilmOutput>=> {
    const film = await Film.findByPk(id);
    if (!film){
        throw new AppError ('Not Found Error', 'Registro não Encontrado', 404);
    }
    return film;
};

export const create = async (payload: FilmInput):Promise<FilmOutput> =>{
    return await Film.create(payload);
};

export const update = async (id:number, payload: FilmInput):Promise<FilmOutput> =>{
    const film= await Film.findByPk(id);
    if(!film){
        throw new Error('Registro não Encontrado')
    }
    return await film.update(payload);
};

export const deleteById = async (id:number):Promise<void> =>{
    const film= await Film.findByPk(id);
    if(!film){
        throw new Error('Registro não Encontrado')
    }
    await film.destroy()
};