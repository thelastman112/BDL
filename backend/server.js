const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const route = require('./routes/route')

const app = express();

app.use(cors())
// app.use(express.json())
//for middleware
// app.use(express.urlencoded({extended: false}))
app.use(route)

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://admin:admin@bdl.ajicbce.mongodb.net/Node=API?retryWrites=true&w=majority')
.then(() => {
  console.log('Connected')
  app.listen(9000, () => {
    console.log("Server is running on port 9000")
  })
  })
  .catch((err) => {
    console.log(err)
  })

