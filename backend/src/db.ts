import {Sequelize} from 'sequelize';
import doteny from 'dotenv';
 
doteny.config();

 const db = new Sequelize({
    dialect:'postgres',
    host: process.env.PGHOST,
    port:parseInt(process.env.PGPORT!),
    username:process.env.PGUSER,
    database:process.env.PGDATABASE,
    password: process.env.PGPASSWORD
 
});


export default db;