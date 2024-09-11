const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const cors = require("cors");
const morgan = require("morgan");

const vvvvv = require('.')
const dbConnection = require("../config/database");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const ApiErrors = require("../utils/ApiErrors");
const globalErrors = require("../middleWares/validatorMiddleWare");

const personalInfoRoute = require('../routes/personalInfoRoute')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

dbConnection(); // databaseConnection


app.use("/api/v1/personalInfo", personalInfoRoute);
app.use("*", (req, res, next) => {
    next(new ApiErrors(`Can't find this route ${req.originalUrl}`, 400));
  });
  


  // handle global errors
  app.use(globalErrors);
  
  // handle rejections outside express
  process.on("unhandledRejection", (err) => {
    console.error(`unhandledRejection Errors: ${err.name} | ${err.message}`);
    server.close(() => {
      console.log("Server shuting down ....");
      process.exit(1);
    });
  });

// #== START LISTEN FUN ==#
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
// !-- END LISTEN FUN --!