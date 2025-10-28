require ('dotenv').config();

const development =
{
  
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_DIALECT,
    "dialect": "mysql"
}

  const test =
{
  
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_DIALECT,
    "dialect": "mysql"
}


  const production = 
{
  
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_DIALECT,
    "dialect": "mysql"
}

module.exports = { development, test, production };