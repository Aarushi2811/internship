//a promise that resolves after 3 sec
let newPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved after 3 seconds")
    },3000)
})

newPromise.then((message)=>{console.log(message)})