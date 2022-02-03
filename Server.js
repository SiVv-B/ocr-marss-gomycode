
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRoute=require('./Routes/UsersMangRoutes')
/* const adminRoute=require('./Routes/AdminRoutes')
 */const intervenantRoute = require ("./Routes/IntervenantsRoutes")
const authRoute=require("./Routes/AuthRoutes")
const dotenv = require("dotenv")
//import error middleware
const errorHandler = require("./Middleware/error")
//Deployment
const path = require("path")


dotenv.config()

app.use(express.json())

//middleware takes data from the body:
app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})
//Routes for UserManagement, intervenants
app.use('/client',userRoute,intervenantRoute)
//Auth Routes (users and admin)
app.use("/auth", authRoute)


const port = process.env.PORT || 5000



//--------------Deployment--------------------


const __dirname1 = path.resolve()

if (process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname1,'client/build')))

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname1,'client','build','index.html'))
  })

}else {
  app.get('/', (req,res)=>{
    res.send('API is running successfully')
  })

}

//--------------Deployment--------------------


mongoose.connect(process.env.CONNECT_DB, (error) => {
  if (error) {
    console.log("connexion to DB failed ")
  } else {
    console.log("database is connected")
  }
})


app.listen(port, (error) => {
  if (error) console.log("failed to run ")
  console.log(`server is running on port ${port}`)
})