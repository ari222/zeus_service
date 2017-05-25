const express = require("express");
const async = require("async");
const mysql = require("mysql");
const mySqlConfig = require("./mySQL-config.json");
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

//add support for cors
app.use(cors());
// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//plugin router into the pipeline
app.use('/zeus',routes);

//MySQL
const pool = mysql.createPool(mySqlConfig);


// app.get('/', (req, res) => {
//   res.json('ready for your queries');
// });

// app.get('/tenders/:id', (req, res) => {
//   let id = req.params.id;
//   pool.getConnection(function (err, connection) {
//     connection.query('SELECT * FROM `MA_TENDERS` WHERE `SALES_REP_ID` = ?', [id],
//       function (err, results) {
//         connection.release();
//         if (err) {
//           console.log('Error while performing Query.');
//           res.status(500).send(err);
//         } else {
//           console.log('MA_TENDERS :', results);
//           res.json(results);
//         }
//       }
//     );
//   });
// });

// app.get("/tenders", function (req, res) {
//   pool.getConnection(function (err, connection) {

//     async.parallel([
//       function (callback) {
//         // Contract Owner Name
//         connection.query(`
// Select SALES_REP_ID, SALES_REP_NM From MA_LIST_SALESREPS`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },
//       // repeat this block for every query & it got to be indexed in the same order inside Angular application
//       //***************************************************************************************** */
//       function (callback) {
//         // Index Name
//         connection.query(`
// Select SYMBOL, FIRST_INDEX_NAME From MA_LIST_INDEX`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },
//       //***************************************************************************************** */
//       function (callback) {
//         // Customer Name
//         connection.query(`
// Select CUST_ID, CUST_NM From MA_LIST_CUSTOMERS`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },
//       //***************************************************************************************** */
//       function (callback) {
//         // Prospects
//         connection.query(`
// Select OSC_PARTY_ID, PROSPECT_NM From MA_LIST_PROSPECTS`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },
//       //***************************************************************************************** */
//       function (callback) {
//         // Customer Groups
//         connection.query(`
// Select CUST_CRDT_GRP_NBR, CUST_CRDT_GRP_NM From MA_LIST_CUSTOMER_GRP`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },
//       //***************************************************************************************** */
//       function (callback) {
//         // Product Name
//         connection.query(`
// Select PRODUCT_NM From MA_LIST_PRODUCTS`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },
//       //***************************************************************************************** */
//       function (callback) {
//         // Location Name
//         connection.query(`
// Select LOC_ID, LOC_NM From MA_LIST_LOCATIONS`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },
//       //***************************************************************************************** */
//       function (callback) {
//         // Supply Team Name
//         connection.query(`
// Select SUPPLY_TEAM_ID, SUPPLY_TEAM_NAME From MA_LIST_SUPPLY_TEAMS`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },
//       //***************************************************************************************** */
//       function (callback) {
//         // Suppliers
//         connection.query(`
// Select SUPPLIER_SITE_ID, SUPPLIER_SITE_NM From MA_LIST_SUPPLIER_SITES`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },
//       //***************************************************************************************** */
//       // Currency
//       function (callback) {
//         connection.query(`
// Select CURRENCY From MA_LIST_CURRENCY`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },

//       //***************************************************************************************** */
//       // Grade Name
//       function (callback) {
//         connection.query(`
// Select GRADE_NAME From MA_LIST_GRADES`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       },

//       // Spec Name
//       function (callback) {
//         connection.query(`
// Select SPEC_NAME From MA_LIST_SPECS`,
//           function (err, done) {
//             callback(err, done);
//           }
//         );
//       }
//     ], function (err, results) {
//       connection.release();
//       if (err) {
//         console.log('Error while performing Query.');
//         res.status(500).send(err);
//       } else {
//         console.log('TENDERS: ', results);
//         res.json(results);
//       }
//     });
//   });
// });

// app.post('/tenders', function (req, res) {
//   let content = req.body;
//   console.log(content);
//   pool.getConnection(function (err, connection) {
//     connection.query(`INSERT INTO MA_TENDERS SET ?`, content,
//       function (err, result) {
//         connection.release();
//         if (err) {
//           console.log('Error while performing Query.');
//           res.status(500).send(err);
//         } else {
//           console.log('MA_TENDERS :', result);
//           res.json(result);
//         }
//       }
//     );
//   });
// });

// app.post('/customercharacteristic', function (req, res) {
//   let content = req.body;
//   console.log(content);
//   pool.getConnection(function (err, connection) {
//     connection.query(`INSERT INTO MA_CUSTOMER_CHARACTERISTICS SET ?`, content,
//       function (err, result) {
//         connection.release();
//         if (err) {
//           console.log('Error while performing Query.');
//           res.status(500).send(err);
//         } else {
//           console.log('MA_CUSTOMER_CHARACTERISTICS :', result);
//           res.json(result);
//         }
//       }
//     );
//   });
// });

//   ********* SHOULD BE UNCOMMENTED TO RUN LOCALLY  *********
app.listen(8080, () => {
  console.log('listening ...');
});
module.exports = app;
