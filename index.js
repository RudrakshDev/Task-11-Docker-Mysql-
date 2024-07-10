const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '9306',
    user: 'root',
    password: 'helloworld',
    database: 'rudrakshDB' 
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as ID:', connection.threadId);
    

    connection.end();
});
