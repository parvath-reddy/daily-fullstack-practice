async function getdata() {
    //simulation of getting data from a server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 2000);
    });

}
async function main() {
    

  console.log('loaading module');
  console.log('load data');

  let data = await getdata();

  console.log(data);
  console.log('end of module');
}

main();

//alternativ eway for using async/await data 
// data.then((v) => {
//     console.log(data);
//     console.log('data is ready');
    
// })