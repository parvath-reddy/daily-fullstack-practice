/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany(
[
  {
    "name": "JavaScript Basics",
    "price": 15000,
    "instructor": "Ankoor"
  },
  {
    "name": "Python for Beginners",
    "price": 12000,
    "instructor": "Sneha"
  },
  {
    "name": "React Mastery",
    "price": 20000,
    "instructor": "Kunal"
  },
  {
    "name": "Node.js Bootcamp",
    "price": 18000,
    "instructor": "Ravi"
  },
  {
    "name": "MongoDB Essentials",
    "price": 14000,
    "instructor": "Priya"
  },
  {
    "name": "Fullstack with MERN",
    "price": 25000,
    "instructor": "Ankoor"
  },
  {
    "name": "Data Structures in JS",
    "price": 16000,
    "instructor": "Megha"
  },
  {
    "name": "DevOps Starter",
    "price": 22000,
    "instructor": "Ankit"
  }
]
);



// Print a message to the output window.
console.log(`done inserting data `);


