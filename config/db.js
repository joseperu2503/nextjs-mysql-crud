import { createPool } from 'mysql2/promise'

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'junior2503',
    // port: 8080,
    database: 'crud-next'
})

export { pool }