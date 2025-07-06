 const { error } = require("console");
const fs = require("fs")
//  console.log(fs);
 
 console.log('starting');
//  fs.writeFileSync("ankoor.txt" ,"ankoor is a good boy")
 
fs.writeFile("harry2.txt", "harry is a good boy" ,()=>{
    console.log("file written");
    fs,fs.readFile("harry2.txt",(error,data)=>{
        console.log( error , data.toString() );
        
    })
})
 console.log('ending');

 fs.appendFile("ankoor","harryrobo", (e,d)=>{
    console.log(d.toString());
    

 })
 console.log('ending');
 