/* create a faulty calculator  usong js 
this faulty calculator does following 
1 .  it takes two numers as inpur from user 
2.  performs wrong operations as follows 
+ -- -
* -- +
- -- /
/ -- **


and it peforms wrong operations only 10% of times 

*/
console.log(" faulty calculatar ")

if (Math.random() < 0.1){
    function sum(a,b){
        return a-b
    }
    function sub(a,b){
        return a/b
    }
    function mul(a,b){
        return a+b
    }
    function div(a,b){
        return a**b
    }

}

else{

    function sum(a,b){
        return a+b
    }
    function sub(a,b){
        return a-b
    }
    function mul(a,b){
        return a*b
    }
    function div(a,b){
        return a/b
    }
}
    
let c = sum(16,14)
let d = sub(16,14)
let p = mul(16,14)
let q = div(16,14)
console.log("output of operation --->> "+ c)
console.log("output of operation --->> "+ d)
console.log("output of operation --->> "+ p)
console.log("output of operation --->> "+ q)