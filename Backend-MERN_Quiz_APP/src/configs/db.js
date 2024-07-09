
const mongoose = require('mongoose')
require("dotenv").config()
module.exports = () => {
  try{
  mongoose
    .connect(process.env.DATABASE, {
      dbName: "QUIZ_DB",
    })
  console.log("Db done")
  }
  catch(error){
    console.log(error)
  }


}
