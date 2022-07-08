import {Error, Sequelize} from 'sequelize';

export const sequelize = new Sequelize ('dvd_rental','postgres','postgres',{
    host:'localhost',
    dialect: 'postgres',
    logging: false,
    define:{
        freezeTableName: true,
        timestamps:false,
    }
});

export default () => {

    sequelize.authenticate().then(() =>{
            console.log('Conexão com o postgres realizada com sucesso');
        }).catch((error: Error)=>{
            console.log(`${error}Conexão com o postgres não foi bem sucedida.`);
    })
}

