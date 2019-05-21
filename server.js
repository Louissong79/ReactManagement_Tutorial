const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync(`./database.json`);
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

/*
app.get('/api/hello', (req, res) => {
    res.send( {message: "Hello Express Louis"});
});

app.get('/api/customers', (req, res) => {
    res.send( [
        
            {
              'id' : 1 ,
              'image' : 'https://placeimg.com/64/64/1',
              'name' : '송제길',
              'birthday' : '791205',
              'gender' : '남자',
              'job' : '회사원'
            },
            {
              'id' : 2 ,
              'image' : 'https://placeimg.com/64/64/2',
              'name' : '한효주',
              'birthday' : '791205',
              'gender' : '여자',
              'job' : '연예인'
            },
            {
              'id' : 3 ,
              'image' : 'https://placeimg.com/64/64/3',
              'name' : '홍길동',
              'birthday' : '791205',
              'gender' : '남자',
              'job' : '백수'
            }                 

    ]);
});
*/

app.get('/api/customers', (req, res) => {
  connection.query(
    "SELECT * FROM CUSTOMER",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));