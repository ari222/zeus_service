const mySQLPool = require("../database.manager");

module.exports = {
    fetchAnsibleConfiguration: function (req, res) {
        //handle connection to db & commit logic here
        let name = req.params.name;
        console.log(name);
        mySQLPool.getConnection(function (err, connection) {
            connection.query('SELECT * FROM `infrastructure_engineering_request_form` WHERE `Project_Name` = ?', [name],
                function (err, result) {
                    connection.release();
                    if (err) {
                        console.log('Error while performing Query.');
                        res.status(500).send(err);
                    } else {
                        console.log('infrastructure_engineering_request_form :', result);
                        res.json(result);
                    }
                }
            );
        });

    }
}