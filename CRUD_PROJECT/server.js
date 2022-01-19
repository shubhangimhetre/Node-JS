const express=require('express');
const bodyparser=require('body-parser');

//create express app
const app=express()

//setup server port
const port=process.env.PORT || 3000

//parse requests of content-type application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended:true}))

//parse requests of content-type-application/json
app.use(bodyparser.json())

//define a root route
app.get('/',(req,res)=>{
    res.send("Hello world.")
})

// Require employee routes
const employeeRoutes = require('./src/routes/employee_routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)


//listen for requests
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})

