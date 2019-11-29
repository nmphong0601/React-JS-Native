const mysql = require('mysql');
const { promisify } = require('util');

// const createConnection = () => mysql.createConnection({
//   host: 'localhost',
//   port: '8889',
//   user: 'root',
//   password: 'root',
//   database: 'qlbh'
// });

const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  port: '3308',
  user: 'root',
  password: '',
  database: 'northwind'
});

const pool_query = promisify(pool.query).bind(pool);

module.exports = {
  load: sql => pool_query(sql),
  add: (entity, tableName) =>
    pool_query(`insert into ${tableName} set ?`, entity),
  update: (id, entity, tableName) =>
    pool_query(`update ${tableName} set ? where id = ${id}`, entity),
  delete: (id, tableName) =>
    pool_query(`delete from ${tableName} where id = ${id}`),
};
