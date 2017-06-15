const mySQLPool = require("../database.manager");

module.exports = {
    commitConfiguration: function (req, res) {
        //handle connection to db & commit logic here
        let content = req.body;
        console.log(content);
        mySQLPool.getConnection(function (err, connection) {
            connection.query(`INSERT INTO Configuration SET ?`, content,
                function (err, result) {
                    connection.release();
                    if (err) {
                        console.log('Error while performing Query.');
                        res.status(500).send(err);
                    } else {
                        console.log('Configuration :', result);
                        res.json(result);
                    }
                }
            );
        });

    }
}