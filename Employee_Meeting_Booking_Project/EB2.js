// ***Employee Meeting Booking***//
console.log("****Welcome to office****")
const input=require("readline-sync")
const fs=require("fs")
OT={}
var officeTiming=input.question("Enter Office Timing(format-(HHMM HHMM) ): ")
function getInput(){
    const input=require("readline-sync")
    var bookingRegister=[],day1=[],d1={},empBooking={}
    empID=input.question("Enter your id : ")
    currentdate=input.question("Enter current date and time (format(DD-MM-YYYY HH:MM:SS)): ")
    meetingdate=input.question("Enter your Meeting schedule (format(DD-MM-YYYY HH:MM:SS)): ")
    meetingHour=input.question("Enter Meeting hours : ")
    empBooking["Bookingdate"]=currentdate
    empBooking["EmpID"]=empID
    empBooking["Meeting Date"]= meetingdate
    empBooking["MHour"]=meetingHour
    fileExist=fs.existsSync("MeetingBooking.json");
    if (fileExist){
        buf=fs.readFileSync("MeetingBooking.json")
        data=JSON.parse(buf)
        for (i of data){
            for (j in i){
                if (j==meetingdate.substr(0,10)){
                    i[j].push(empBooking)
                    break
                }else{   
                    d1[meetingdate.substr(0,10)]=day1
                    day1.push(empBooking)
                    data.push(d1)
                    break
                }    
            }break
        }
        fs.writeFileSync("MeetingBooking.json",JSON.stringify(data,null,4))
    }else{
        day1.push(empBooking)
        d1[meetingdate.substr(0,10)]=day1
        bookingRegister.push(d1)
        fs.writeFileSync("MeetingBooking.json",JSON.stringify(bookingRegister,null,4))
    }
    userInput2=input.question("Do you want to add more Meeting(y/n): ")
    if (userInput2=="y"){
        getInput()
    }
}
var userInput=input.question("Enter (y/n) for  Meeting booking:  ")
if (userInput=="y"){
    getInput()
}
buf2=fs.readFileSync("MeetingBooking.json")
data2=JSON.parse(buf2)
for (a of data2){
    for (b in a){
        for (c of a[b]){
            console.log(c["Bookingdate"]+" " +c["EmpID"]);
            console.log(c["Meeting Date"]+" "+c["MHour"]);
        }
    }
}
fileExist2=fs.existsSync("FinalBooked.json");
var BookedRegister=[]
var d12={}
if (fileExist2){
    buf3=fs.readFileSync("FinalBooked.json")
    data3=JSON.parse(buf3)
    for (i of data2){
        for (j in i ){
            var Ftime=0,F2time=0,timing=0,timing2=0,hour=0, th=0, th2="",Mhour=0
            for (k of i[j]){
                for (l in k){
                timing= k["Meeting Date"].substr(-8,2)+k["Meeting Date"].substr(-5,2)
                th=k["Meeting Date"].substr(-8,2)
                th2=k["Meeting Date"].substr(-5,2)
                hour=k["MHour"]
                empId=k["EmpID"]
                timing2=Number(th)+Number(hour)+th2
                if(timing >=Ftime && timing <=F2time ){
                }else{
                    if((timing<=1700 && timing2<=1700 ) && (timing>=0900 && timing2>=0900)){
                        var empbooked={},d12={}
                        Ftime=timing
                        Ftime=timing
                        F2time=timing2
                        Mhour=hour
                        empbooked["EmpID"]=empId
                        empbooked["MeetingStart"]=Ftime
                        empbooked["MeetingEnd"]=F2time
                        empbooked["Hour"]=Mhour
                        d12[j]=empbooked
                        // console.log(d12);
                        data3.push(d12)  
                        console.log(data3);    
    }   }   }   }   }   }   
fs.writeFileSync("FinalBooked.json",JSON.stringify(data3,null,4))
}else{
    for (i of data2){
        for (j in i ){
            var Ftime=0,F2time=0, timing=0,timing2=0,hour=0,th=0,th2="",Mhour=0
            for (k of i[j]){
                for (l in k){
                timing= k["Meeting Date"].substr(-8,2)+k["Meeting Date"].substr(-5,2)
                th=k["Meeting Date"].substr(-8,2)
                th2=k["Meeting Date"].substr(-5,2)
                hour=k["MHour"]
                empId=k["EmpID"]
                timing2=Number(th)+Number(hour)+th2
                if(timing >=Ftime && timing <=F2time ){

                }else{
                    if((timing<=1700 && timing2<=1700 ) && (timing>=0900 && timing2>=0900)){
                        var empbooked={}
                        var d12={}
                        Ftime=timing
                        Ftime=timing
                        F2time=timing2
                        Mhour=hour
                        empbooked["EmpID"]=empId
                        empbooked["MeetingStart"]=Ftime
                        empbooked["MeetingEnd"]=F2time
                        empbooked["Hour"]=Mhour
                        d12[j]=empbooked
                        // console.log(j);
                        BookedRegister.push(d12)   
    }   }   }   }   }   } 
    fs.writeFileSync("FinalBooked.json",JSON.stringify(BookedRegister,null,4))
}
// fs.writeFileSync("FinalBooked.json",JSON.stringify(BookedRegister,null,4))
let buf5=fs.readFileSync("FinalBooked.json")
let data5=JSON.parse(buf5)
var d1={},l1=[]
for (i of data5){
    for (j in i){
        if (!(j in d1)){
            for (k in d1){
                if (j==k){
                    d1[k].push(i[j])
                }
            }
        }else{
            l1=[]
            l1.push(i[j])
            d1[j]=l1
        }
    }
}
// console.log(d1);