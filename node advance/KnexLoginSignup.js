//Knex Loginsignup
const knex= require('knex')({
    client: 'mysql', 
    connection: {host : 'localhost',user : 'root',password : 'Shubh@7171',database : 'Mydb'}});
const k=require("readline-sync")
function password_check(pw) {
    let l=[0,0,0,0]
    if (pw.length<=6){
        console.log("Password should have length minimum 6.")
    }
    let spl='!@#$%^&*()-+'
    for ( i of pw){
        // console.log(i)
        if (!isNaN(i* 1)){
            l[0]=1
        }else if (!(!spl.includes(i))){  
            l[3]=1
        }
        else if (i==i.toUpperCase()){
            l[1]=1
        }else if (i==i.toLowerCase()){
            l[2]=1
        }
    }
    let sum=0
    for (i of l){  
        sum+=i
    }
    if (sum==4){   
       return true
    }        
}

var user_input=k.question("login or signup: ")
if (user_input=="signup"){
    var username=k.question("Enter your username: ")
    var pw=k.question("Enter password: ")
    var valid=password_check(pw)  
    if (valid===true){
        function pw2valid (pw) {
            var pw2=k.question("Enter password again: ")
            if (pw==pw2){
                console.log("Password confirmed")  
            }else{
                console.log("Password didn't match try again")
                pw2valid(pw)
            }
        }
        pw2valid(pw)
    }else{
        console.log("Password should contain atleast one uppercase, lowercase ,one special character.")
        var pw=k.question("Enter password: ")
        pw2valid(pw)
    }
    console.log("Congrats,", username,"You are signed up successfully..")  

    var Age=k.question("Age: ")
    var Gender=k.question("Gender: ")   
    var Hobbies=k.question("Hobbies: ") 
     
    //Inserting data in database
    const data=[{name:username,password:pw,age:Age,gender:Gender,hobbies:Hobbies}]
    
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


}else if(user_input=="login"){
    var username=k.question("Enter your username: ")
    var pw=k.question("Enter password: ")
    var valid=password_check(pw)  
    if (valid===true){
        function pw2valid (pw) {
        
            var pw2=k.question("Enter password again: ")
            if (pw==pw2){
            console.log("Password confirmed")  
            }else{
                console.log("Password didn't match try again")
                pw2valid(pw)
            }
        }
        pw2valid(pw)
    }else{
        console.log("Password should contain atleast one uppercase, lowercase ,one special character.")       
    }

knex.from('Knexloginsignup').select('*')
.then((rows)=> {for (row of rows) { 
    if (row['name']==username && row['password']==pw){
    console.log(`Login successfully...Your profile: sr no.${row['id']}, Username-${row['name']}, Password-${row['password']}, Age-${row['age']},Gender-${row['gender']}, Hobbies-${row ['hobbies']}`);
}
// console.log(row)
}})
.catch((err) => { console.log( err); throw err })
.finally(() => {
knex.destroy();
});
}