import {product,sum, printData, data} from './util.js'
console.log(sum(1,2));
console.log(product(1,2));

console.log(data[1])
console.log(`Data from app.js`);
console.log(data);
console.log(data.push(40));
printData();

async function start(){
    const external = await import('./lazyEvaluation.js');
    console.log(external);
    // const {getData } = await import('./lazyEvaluation.js');
    // console.log(getData);
}

window.start = start // Така правим функцията глобална,всички останали в файла не са.
//* Идеята на този начин е когато имаме по-голямо приложение ,да не зареждаме всичко
//* Примерно потребителя когато достигне до определена страница,чак тогава да го зареди.