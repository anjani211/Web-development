//non primitive datatypes = arrays, objects,function

function hi(param){
    // console.log("hello from hi")
    let rval = Math.random()>0.5?true:"less then 0.5";
    // console.log("param recieved ", param)
    return rval


}
// calling function
console.log(hi(10));