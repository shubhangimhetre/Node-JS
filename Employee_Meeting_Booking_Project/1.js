// var a = new Date(2021, 1, 1, 9, 30, 00);
// console.log(a);

var g2 = new Date(11, 45);
     
// (YYYY, MM, DD, Hr, Min, Sec)
var g1 = new Date(10, 22, 42);
if (g1.getTime() < g2.getTime()){
   console.log("g1 is lesser than g2");
}else if (g1.getTime() > g2.getTime()){
    console.log("g1 is greater than g2");
}else{
   console.log("both are equal");
}

// empbooked["EmpID"]=k["EmpID"]
                            // empbooked["MeetingStart"]=Ftime
                            // empbooked["MeetingStart"]=F2time
                            // empbooked[Mhour]=Mhour
                            // day12.push(empbooked)
                            // d12[j]=day12
                            // BookedRegister.push(d12)
                            // fs.writeFileSync("FinalBooked.json",JSON.stringify(BookedRegister,null,4))

                        //     for (i of data2){
        
                        //       for (j in i ){
                        //           var Ftime=0
                        //               var F2time=0
                        //               var timing=0
                        //               var timing2=0
                        //               var empId=""
                        //               var hour=0
                        //               var th=0
                        //               var th2=""
                        //               var Mhour=0
                        //           for (k of i[j]){
                        //               for (l in k){
                        //               console.log(l)
                        //               timing= k["Meeting Date"].substr(-8,2)+k["Meeting Date"].substr(-5,2)
                        //               th=k["Meeting Date"].substr(-8,2)
                        //               th2=k["Meeting Date"].substr(-5,2)
                        //               hour=k["MHour"]
                        //               empId=k["EmpID"]
                        //               timing2=Number(th)+Number(hour)+th2
                        //               console.log(timing2);
                                      
                        //                   if (!(timing >=Ftime && timing <=F2time )&&(((timing<=1700 && timing2<=1700 ) && (timing>=0900 && timing2>=0900)) ||( timing>=F2time && timing2<=1700 && timing>=0900))){
                        //                       Ftime=timing
                        //                       F2time=timing2
                        //                       Mhour=hour
                                          
                        //                       empbooked["EmpID"]=empId
                        //                       empbooked["MeetingStart"]=Ftime
                        //                       empbooked["MeetingEnd"]=F2time
                        //                       empbooked["Hour"]=Mhour
                        //                       console.log(Ftime);
                        //                       console.log(F2time);
                        //                       console.log(Mhour);
                        //                       console.log(empId);
                        //                       day12.push(empbooked)
                        //                       d12[j]=day12
                        //                       BookedRegister.push(d12)
                        //                       fs.writeFileSync("FinalBooked.json",JSON.stringify(BookedRegister,null,4))   
                        //                       }
                                  
                        //               }
                                        
                        //           }   
                        //       }
                        //   }

d={"shubh":12}
if (!(2 in d)){
   console.log("true");
}