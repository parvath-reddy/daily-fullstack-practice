// use("crudDb")
// db.createCollection("courses")
  
// db.courses.insertOne({
//     name : " ankoor we dev free coruse ",
//     price : 0,
//     duration : 30,
//     description : "free course",
//     rating : 4.5,
//     })


// let a = db.courses.find({ price: 0 }).toArray();


// console.log(a.toArray());

// let b = db.courses.findOne({price:0})
// console.log(b);

//update 
// db.courses.updateOne({price: 0} , {$set : {price : 100}})

// db.courses.updateMany({price : 0},{$set:{price:1000}})


//delete
db.courses.deleteOne({price:0})

//same like that we can delet many at once 