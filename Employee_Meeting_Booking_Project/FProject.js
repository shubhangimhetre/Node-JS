//***Employee Meeting Booking***//
console.log("****Welcome to office****")
const input=require("readline-sync")
const fs=require("fs")
OT={}

// var officeTiming=input.question("Enter Office Timing(format-(HHMM HHMM) ): ")
// function getInput(){
//     const input=require("readline-sync")
//     bookingRegister=[]
//     day1=[]
//     d1={}
//     empBooking={}
//     empID=input.question("Enter your id : ")
//     currentdate=input.question("Enter current date and time (format(DD-MM-YYYY HH:MM:SS)): ")
//     meetingdate=input.question("Enter your Meeting schedule (format(DD-MM-YYYY HH:MM:SS)): ")
//     meetingHour=input.question("Enter Meeting hours : ")
//     empBooking["Bookingdate"]=currentdate
//     empBooking["EmpID"]=empID
//     empBooking["Meeting Date"]= meetingdate
//     empBooking["MHour"]=meetingHour
//     fileExist=fs.existsSync("MeetingBooking.json");
//     if (fileExist){
//         buf=fs.readFileSync("MeetingBooking.json")
//         data=JSON.parse(buf)
//         for (i of data){
//             for (j in i){
//                 if (j==meetingdate.substr(0,10)){
//                     i[j].push(empBooking)
//                     break
//                 }else{   
//                     d1[meetingdate.substr(0,10)]=day1
//                     day1.push(empBooking)
//                     data.push(d1)
//                     break
//                 }    
//             }
//             break
//         }
//         fs.writeFileSync("MeetingBooking.json",JSON.stringify(data,null,4))
//     }else{
//         day1.push(empBooking)
//         d1[meetingdate.substr(0,10)]=day1
//         bookingRegister.push(d1)
//         fs.writeFileSync("MeetingBooking.json",JSON.stringify(bookingRegister,null,4))
//     }
//     userInput2=input.question("Do you want to add more Meeting(y/n): ")
//     if (userInput2=="y"){
//         getInput()
//     }
// }
// var userInput=input.question("Enter (y/n) for  Meeting booking:  ")
// if (userInput=="y"){
//     getInput()
// }

buf2=fs.readFileSync("MeetingBooking.json")
data2=JSON.parse(buf2)
// console.log(data2);

fileExist2=fs.existsSync("FinalBooked.json");
console.log(fileExist2);
var BookedRegister=[]
var d12={}
var day12=[]
var empbooked={}
var Ftime=0
var F2time=0
var timing=0
var timing2=0
var hour=0
var th=0
var th2=""
var Mhour=0
if (fileExist2){
    buf3=fs.readFileSync("FinalBooked.json")
    data3=JSON.parse(buf3)
    
    for (i of data2){
        for (j in i ){
          
            for (k of i[j]){
                
                    timing= k["Meeting Date"].substr(-8,2)+k["Meeting Date"].substr(-5,2)
                    th=k["Meeting Date"].substr(-8,2)
                    th2=k["Meeting Date"].substr(-5,2)
                    hour=k["MHour"]
                    timing2=Number(th)+Number(hour)+th2
                    if (timing >Ftime && timing <F2time  ){            
                    }else{
                        if (((timing<=1700 && timing2<=1700 ) && (timing>=0900 && timing2>=0900)) ||( timing>=F2time && timing2<=1700 && timing>=0900)){
                            Ftime=timing
                            F2time=timing2
                            Mhour=hour
                            console.log(Ftime);
                            console.log(F2time);
                            console.log(Mhour);
                            break
                        }
                    }
                
                empbooked["EmpID"]=k["EmpID"]
                empbooked["MeetingStart"]=Ftime
                empbooked["MeetingEnd"]=F2time
                empbooked["Hour"]=hour
                day12.push(empbooked)
                d12[j]=day12
                if (!data3.includes(d12)){
                data3.push(d12)
                }
                fs.writeFileSync("FinalBooked.json",JSON.stringify(data3,null,4))
                
            }
        }
       
       
    }

}else{
    // console.log(data2);
    for (i of data2){
        for (j in i ){
            for (k of i[j]){
                for (l in k){
                    timing= k["Meeting Date"].substr(-8,2)+k["Meeting Date"].substr(-5,2)
                    th=k["Meeting Date"].substr(-8,2)
                    th2=k["Meeting Date"].substr(-5,2)
                    hour=k["MHour"]
                    timing2=Number(th)+Number(hour)+th2
                    if (timing >=Ftime && timing <=F2time  ){  


                    }else{
                        if (((timing<=1700 && timing2<=1700 ) && (timing>=0900 && timing2>=0900)) ||( timing>=F2time && timing2<=1700 && timing>=0900)){
                            Ftime=timing
                            F2time=timing2
                            Mhour=hour
                            console.log(Ftime);
                            console.log(F2time);
                            console.log(Mhour);
                        }
                    }
                }
                empbooked["EmpID"]=k["EmpID"]
                empbooked["MeetingStart"]=Ftime
                empbooked["MeetingEnd"]=F2time
                empbooked["Hour"]=Mhour
                day12.push(empbooked)
                d12[j]=day12
                if (!BookedRegister.includes(d12)){
                BookedRegister.push(d12)
                }
                fs.writeFileSync("FinalBooked.json",JSON.stringify(BookedRegister,null,4))
                
            }
            
        }
        
        
    
    }
    

}
buf4=fs.readFileSync("MeetingBooking.json")
data4=JSON.parse(buf4)


for (i of data4){
    for (j in i){
        for (l of i[j]){
            for (k in l){
                k[l]
                console.log(k["Bookingdate"]+" " +k["EmpID"]);
                console.log(k["Meeting Date"]+" "+k["MHour"]);
            }
        }
    }
}
buf5=fs.readFileSync("FinalBooked.json")
data5=JSON.parse(buf5)
for (i of data5){
    for (j in i){
        console.log(j)
        for(l of i[j]){
          for (k in l){
              console.log(k["MeetingStart"]+" "+k["MeetingEnd"]+" "+k["EmpID"]);

          }
        }
    }
}