function choice(items){
    const numRandom = Math.ceil(Math.random()*items.length-1)
    return items[numRandom]
}

function remove(items, item){
    let fruitLeft = items
    for (let i = 0; i < fruitLeft.length; i++) {
        if(fruitLeft[i] === item){
            fruitLeft.splice(i,1)
        }
    }
    return fruitLeft.length
}

export {choice, remove};