//DatabaseLoginSignup
// sudo mysql -u root -p

var mysql=require("mysql")
var k=require('readline-sync')
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Shubh@7171",
    database:"Mydb"
});

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
    var Birthdate=k.question("Birthdate: ")
    var Gender=k.question("Gender: ")   
    var Hobbies=k.question("Hobbies: ") 
    var Description=k.question("enter your description: ")  
    con.connect(function(err) {
        if (err){console.log('Not connected')
        }else{
        console.log("Connected!");}

        var sql = "CREATE TABLE Loginsignup (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) UNIQUE, password VARCHAR(255) UNIQUE,birthdate varchar(255),gender varchar(255),hobbies varchar(255),discription varchar(255))";
        con.query(sql, function (err, result) {
        if (err){
            var sql = "INSERT INTO Loginsignup (name,password,birthdate,gender,hobbies,discription) VALUES ?";
            var values=[[username,pw,Birthdate,Gender,Hobbies,Description]]
            con.query(sql,[values], function (err, result) {
            if (err){
                console.log('Error while inserting data.')
            }else{
            console.log("record inserted: "+result.affectedRows)}
        });

        }else{
        console.log("Table created");
        }
        });

    });
}

else if(user_input=="login"){
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
con.connect(function(err){
            if (err){console.log("Login data not found.")
            }else{
                console.log("Connected!")
                var sql="SELECT*FROM Loginsignup WHERE name=? OR password=?";
                v1=username
                v2=pw
                con.query(sql,[v1,v2],function(err,result){
                    if (err) console.log("Username and password not found.");
                    console.log(result)
                })
            }
        })
}
