// function walkDog(callback){
//     setTimeout(() => {
//         console.log('You walk the dog!');
//         callback();
//     }, 1500)
// }

// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log('You cleaned the kitchen!');
//         callback()
//     }, 2500)
// }

// function takeOutTrash(callback){
//     setTimeout(() => {
//         console.log('You take out trash!');
//         callback()
//     }, 500)
// }

// walkDog(() => cleanKitchen( () => takeOutTrash(() => console.log('You did every task'))));

function walkDog(){

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const walkedDog = true;

            if(walkedDog){
            resolve('You walk the dog!')
            }
            else{
                reject("You DIDN'T walk the dog!")
            }
        }, 1500)
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleaned = true;

            if(cleaned){
                resolve('You clean the kitchen!');
            }
            else{
                reject("You DIND'T clean the kitchen!")
            }
            
        }, 2500)
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeout = true;
            
            if(takeout){
                resolve('You take out the trash!')
            }
            else{
                reject("You DIDN'T take out the trash!")
            }
            
        }, 500)
    })
}

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log('You did every task!')})
//          .catch(error => console.error(error))

async function fazerTarefas(){

    try{
        const resWalkDog = await walkDog();
        console.log(resWalkDog);

        const resCleanKitchen = await cleanKitchen();
        console.log(resCleanKitchen);

        const resTakeOutTrash = await takeOutTrash();
        console.log(resTakeOutTrash);

        console.log('You complete every task!');
    }
    catch(error){
        console.error(error);
    }
    
}

fazerTarefas();