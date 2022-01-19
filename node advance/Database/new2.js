
const knex= require('knex')({
    client: 'mysql', 
    connection: {host : 'localhost',user : 'root',password : 'Shubh@7171',database : 'Mydb'}});


//*******table creation*********
const data=[{name:'shubhangi',password:'Shubhu@7171',age:22,gender:"female",hobbies:'coding'},
{name:'aarti',password:'Aarti@123',age:21,gender:"female",hobbies:'coding'},
{name:'sanju',password:'Sanju@123',age:22,gender:"female",hobbies:'coding'}]

knex.schema.createTable('Knexloginsignup', (table) => {
    table.increments('id')
    table.string('name')
    table.string('password')
    table.integer('age')
    table.string('gender')
    table.string('hobbies')
  })
  .then((result) =>{console.log("Table Created.")} )
  .catch((err)=>{console.log("Table exists");knex('Knexloginsignup').insert(data).then(()=>{console.log("Data inserted")})
  .catch((err)=>{console.log("Error while inserting data in table.")})
  })

//

// knex("knecLoginsignup").del();
// knex('KnexLoginsignup')