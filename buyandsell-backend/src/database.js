import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hapi-server',
    password: 'abc123',
    database: 'buyandsell',
});

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) =>{
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            })
        }),

    end: () => connection.end(),
}