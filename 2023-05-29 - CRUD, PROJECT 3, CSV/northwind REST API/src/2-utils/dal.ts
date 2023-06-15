import mysql from "mysql";
import dotenv from 'dotenv';
import { Error } from "../4-models/Error";

dotenv.config();


//Create a connection pool to MySQL
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

const execute = <T>(sqlQuery: string): Promise<T> => {
    return new Promise<any>((resolve, reject) => {
        connection.query(sqlQuery, (err, result) => {

            if (err) {
                reject(new Error(err.sqlMessage || 'sql error', 500));
            } else {
                resolve(result);
            }

        })
    });
}

export default {
    execute
}