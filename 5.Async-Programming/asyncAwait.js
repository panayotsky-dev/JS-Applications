function wait(){
    return new Promise (resolve =>{
        setTimeout(resolve,2000,'resolved')
    })
}

// function start(){
//     console.log('before promise')

//     wait().then(value => console.log(value))

//     console.log('after promise')
// }

// start();

// оператора await resolve promise и връща неговото value като стойност

async function start2(){
    console.log('before promise')

    const value = await wait()//.then(value => console.log(value))
    console.log(value);
    console.log('after promise')
}

start2();
