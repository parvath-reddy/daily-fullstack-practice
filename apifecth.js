
async function getdata() {
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await x.json();
   console.log(data);
   return data;
    

}
async function main() {
    

  console.log('loaading module');
  console.log('load data');

  let data = await getdata();

  console.log(data);
  console.log('end of module');
}
main();

//settle means resolve or reject the promise

// resolve means promise has settled sucesfully 
// reject means promise has settled with an error 