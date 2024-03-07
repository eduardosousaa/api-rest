import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

let host = process.env.DB_HOST;
let port = process.env.DB_PORT;
let user = process.env.DB_USER;
let password = process.env.DB_PASS;
let database = process.env.DB_NAME;
console.log(host);

const conexao = mysql.createConnection({
    host,
    port,
    user,
    password,
    database
})

conexao.connect()

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores  a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promise
 */

export const consulta = (sql, valores = '', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores,  (erro, resltado) => {
            if (erro) return reject(mensagemReject)
            const linhas = JSON.parse(JSON.stringify(resltado))
            return resolve(linhas)
        })
    })
}

export default conexao
