function start(){
    console.log('Before promies')
    let p = new Promise((resolve,reject)=> {
        setTimeout(reject,2000,'Intentional error')
    
    })
    p.then((result)=> {
        console.log(result);
    })
    p.catch((error)=> {
        console.log('Encountered error: ',error);
    })
    
    console.log('After promise')


}
start()
