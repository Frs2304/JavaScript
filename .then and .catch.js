let p1 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
      alert("I am promise and i am resolving")
    },3000)
    resolve(true)
    
  })
  console.log(p1)
  let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
      alert("I am promise and i am rejected")
    },5000)
    reject(new Error("I am an error"))
    
  })
  console.log(p2)
  
  p1.then((value)=>{
    console.log(value)
  })
  
  p2.catch((error)=>{
    console.log("some error occured in p2")
  })