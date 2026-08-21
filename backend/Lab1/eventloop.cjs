console.log("This is starting point of my code");
process.nextTick(()=>{
console.log("This is next tick of my code");
})
setTimeout(()=>{
console.log("This is setTimeout of my code");
},2000);

setTimeout(()=>{
console.log("This is second timeout of my code");
},5000);
console.log("This is end point of my code");
setImmediate(()=>{
    console.log("This is setImmediate of my code");
    
});
process.nextTick(()=>{
});
new Promise((resolve,reject)=>{
    let success = true;
    if (success) resolve("Data fetched successfully");
    else reject("Data not fetched successfully");
});
