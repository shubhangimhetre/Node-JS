// JSON loginsignup page

function LoginSignup() {
    

const f=require("fs")
var file_exists=f.existsSync("userdetails.json")
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

function writefilefun(main_dic) {
    f.writeFileSync("userdetails.json",JSON.stringify(main_dic,null,4))   

}

const k=require("readline-sync")
const a=require("fs")
const { stringify } = require("querystring")

var user_input=k.question("login or signup: ")

if (file_exists==false){
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
        }
        var d1={}
        var d2={}
        var main_dic={}
        d1["Username"]=username
        d1["Password"]=pw 
        console.log("Congrats,", username,"You are signed up successfully..") 
        var Description=k.question("enter your description: ") 
        var Birthdate=k.question("Birthdate: ")  
        var Hobbies=k.question("Hobbies: ") 
        var Gender=k.question("Gender: ") 
        d2["Description: "]=Description
        d2["Birthdate: "]=Birthdate
        d2["Hobbies: "]=Hobbies
        d2["Gender"]=Gender
        d1["Profile"]=d2
    // var obj=f.readFileSync("userdetails.json")
    // let main_dic=JSON.parse(obj)

        main_dic[pw]=d1
        writefilefun(main_dic)
    }
}else if (file_exists==true){
    if(user_input=="login"){
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
        var obj=f.readFileSync("userdetails.json")
        let data=JSON.parse(obj)
        // console.log(data)
        for (i in data){
            if (i==pw){
                for (j in data[i]){
                    // console.log(data[i]["Username"])
                    // console.log(username)
                    // console.log(data[i]["Password"])
                    // console.log(pw)
                    if (data[i]["Username"]==username && data[i]["Password"]==pw){ 

                        console.log("Congrats, you logged in successfully.")
                        console.log("Your Profile data: ")
                        console.log(data[pw])
                        break
                    }else{
                        // console.log(username)
                        // console.log(pw)
                        console.log("sorry, login data not matched.")
                        console.log("you should signup first.")
                        LoginSignup()
                        }
                }
                break
            }
            
        
        }
    }else if (user_input=="signup"){
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
        var d1={}
        var d2={}
        d1["Username"]=username
        d1["Password"]=pw 
        console.log("Congrats,", username,"You are signed up successfully..") 
        var Description=k.question("enter your description: ") 
        var Birthdate=k.question("Birthdate: ")  
        var Hobbies=k.question("Hobbies: ") 
        var Gender=k.question("Gender: ") 
        d2["Description: "]=Description
        d2["Birthdate: "]=Birthdate
        d2["Hobbies: "]=Hobbies
        d2["Gender"]=Gender
        d1["Profile"]=d2
        var obj=f.readFileSync("userdetails.json")
        let main_dic=JSON.parse(obj)

        main_dic[pw]=d1
        writefilefun(main_dic)

    }
}







}
LoginSignup()