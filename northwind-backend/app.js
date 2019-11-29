const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
var cors = require("cors");
require('express-async-errors');

const app = express();

app.set("secretKey", "nodeRestApi");
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    msg: 'hello from nodejs express api'
  });
})

app.use("/api/users", require("./routes/users.route"));
app.use("/api/customers", require("./routes/customers.route"));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header("Access-Control-Allow-Headers","*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   next();
// });
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use((req, res, next) => {
  const err404 = createError(404, 'NOT FOUND');
  next(err404);
})

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('View error log on console.');
})

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);
})