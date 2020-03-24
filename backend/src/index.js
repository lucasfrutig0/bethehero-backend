//root file of app
const express =  require('express')
const cors = require('cors')
const routes = require('./routes')
const app  =  express()

app.use(cors())
//JSON for body requests
app.use(express.json())

//User routes
app.use(routes)

/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP
 * 
 * GET: Buscar/Listas uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: ALterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos ":id"
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users).select('*').where() /KNEXJS
    */



app.listen(3333)
