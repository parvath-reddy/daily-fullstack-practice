console.log('this is promises');

let promo1 = new Promise((resolve, reject) => {
    let a = Math.random();

    if (a < 0.5) {
        reject('rejected promise');
    } else {
        setTimeout(() => {
            console.log('yes I\'m done');
            resolve('resolved promise');
        }, 2000);
    }
});

let promo2 = new Promise((resolve, reject) => {
    let a = Math.random();

    if (a < 0.5) {
        reject('rejected promise 2');
    } else {
        setTimeout(() => {
            console.log('yes I\'m done 2');
            resolve('resolved promise 2');
        }, 1000);
    }
});

// Use Promise.allSettled to get status/value for all
let p3 = Promise.allSettled([promo1, promo2]);

p3.then((results) => {
    console.log('All Settled Results:', results);
    // Each result will be an object like:
    // { status: 'fulfilled', value: 'resolved promise' }
    // OR
    // { status: 'rejected', reason: 'rejected promise' }
}).catch(err => {
    console.log('Error:', err);
});
// Use Promise.all to get the first resolved promise


 
let p4 = Promise.race([promo1, promo2]);

p4.then((result) => {
    console.log('First Resolved Result:', result);
}).catch(err => {
    console.log('Error:', err);
});
// Use Promise.all to get the first resolved promise