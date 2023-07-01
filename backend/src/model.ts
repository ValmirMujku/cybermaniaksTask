import {Model, DataTypes,InferAttributes, InferCreationAttributes,} from 'sequelize';
import db from './db'

interface formAttribute{
    id:number;
    name:string;
    surname:string;
    address:string;
    city:string;
    country:string;
    email:string;
    phoneNumber:number;
    createdAt:Date;
    updatedAt:Date;
}

export default class FormInstance extends Model<formAttribute>{}
FormInstance.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
        autoIncrementIdentity:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    surname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    phoneNumber:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
     
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE,

},{
    tableName: 'forms',
    sequelize:db
});