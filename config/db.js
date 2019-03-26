var mysql = require("mysql");
var pool = mysql.createPool({
    host:"118.25.3.251",
    user:"facepig_test",
    password:"facepig_test",
    database:"facepig_test"
});

function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}

exports.query = query;