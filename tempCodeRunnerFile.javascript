fs.writeFile("harry2.txt", "harry is a good boy" ,()=>{
    console.log("file written");
    fs,fs.readFile("harry2.txt",(error,data)=>{
        console.log( error , data.toString() );
        //again
        fs.writeFile("harry2.txt", "harry is a good boy" ,()=>{
    console.log("file written");
    fs,fs.readFile("harry2.txt",(error,data)=>{
        console.log( error , data.toString() );
        //again
        fs.writeFile("harry2.txt", "harry is a good boy" ,()=>{
    console.log("file written");
    fs,fs.readFile("harry2.txt",(error,data)=>{
        console.log( error , data.toString() );
        
    })
})
        
    })
})
        
    })
})