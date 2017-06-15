const mySQLPool = require("../database.manager");

module.exports = {
    fetchAnsibleConfiguration: function (req, res) {
        //handle connection to db & commit logic here
        let name = req.params.name;
        console.log(name);
        mySQLPool.getConnection(function (err, connection) {
            connection.query('SELECT * FROM `Configuration` WHERE `configuration_name` = ?', [name],
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