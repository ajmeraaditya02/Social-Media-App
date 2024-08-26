import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"aditya@170502A",
    database:"SocioSphere"
})
