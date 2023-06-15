import mysql from "mysql";
import dotenv from 'dotenv';

dotenv.config();


//Create a connection pool to MySQL
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

const execute = (sqlQuery: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        connection.query(sqlQuery, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        })
    });
}

export default {
    execute
}